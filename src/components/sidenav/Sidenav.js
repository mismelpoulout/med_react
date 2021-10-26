import React, { useEffect, useRef, useState } from 'react';

import "./Sidenav.css";

export default function Sidenav({ children, visible }) {
    const overlayRef = useRef();
    const sidenavRef = useRef();
    const [sidenav, setSidenav] = useState(null);
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        const sidenav = new DragableSideElement({
            maxWidth: 300,
            elementRef: sidenavRef,
            setVisible: setIsVisible,
            overlayRef: overlayRef
        });
        setSidenav(sidenav);
    }, []);

    useEffect(() => {
        if (!sidenav) return;
        if (isVisible) {
            sidenav.open();
        } else {
            sidenav.close();
        }
    }, [isVisible]);



    return (
        <div className="overlay" onClick={({ target }) => target.classList.contains("overlay") ? setIsVisible(false) : ""} ref={overlayRef}>
            <nav ref={sidenavRef} className="sidenav">
                {children}
            </nav>
        </div>
    )
}




const SIDES = {
    LEFT: Symbol("left"),
    RIGHT: Symbol("right"),
    TOP: Symbol("top"),
    BOTTOM: Symbol("bottom"),
    NONE: Symbol("none")
}
const AXES = {
    X: Symbol("Xaxis"),
    Y: Symbol("Yaxis"),
    NONE: Symbol("none")
}
class DragableSideElement {
    constructor(settings) {
        this.moving = false;
        this.translateX = 0;
        this.maxWidth = settings.maxWidth;
        this.startTime = 0;
        this.movingSide = SIDES.NONE;
        this.opacity = 0;

        this.lastTouchPosition = new Vector();
        this.movingAxes = AXES.NONE;

        this._canBeDragged = true;
        this.element = settings.elementRef.current;
        this.setVisible = settings.setVisible;
        this.overlay = settings.overlayRef.current;
        console.log(settings)

        //element
        setCSSVarProperty("sidenav-maxWidth", settings.maxWidth + "px");

        this.onTranslateChange = () => {
            this.updateElement();
        }



        window.addEventListener("touchmove", e => {
            if (!this.moving || this.movingSide === SIDES.TOP || this.movingSide === SIDES.BOTTOM || !this._canBeDragged) return;

            this.element.classList.remove("active");


            const currentTouchPosition = getTouchPositionFromEvent(e);

            const diference = this.lastTouchPosition.substract(currentTouchPosition);

            this.movingAxes = Vector.computeAxes(this.movingSide, this.lastTouchPosition, currentTouchPosition);

            if (this.movingAxes === AXES.Y) {
                this.movingSide = Vector.computeSideInYAxi(diference.y)
            } else {
                this.movingSide = Vector.computeSideInXAxi(diference.x);
                this.lastTouchPosition = currentTouchPosition;
                this.addTranslateX(diference.x);
            }


        })

        window.addEventListener("touchstart", e => {
            this.startTime = Date.now();
            this.handleSidenavStartTouch(e);
        });

        function elementTouchStart(e) {

            this.moving = true;
            this.lastTouchPosition = getTouchPositionFromEvent(e);
        }


        function onTouchend(e) {
            this.moving = false;
            this.element.classList.add("active");
            if (this.translateX !== this.maxWidth) {

                this.overlay.classList.remove("active");
            }

            const timeSinceFirstTouch = Date.now() - this.startTime;

            if (this.movingAxes === AXES.X) {
                if (timeSinceFirstTouch < 300) {
                    if (this.movingSide === SIDES.RIGHT)
                        this.open()
                    else
                        this.close();
                }

                if (this.translateX > this.maxWidth * 0.5)
                    this.open()
                else
                    this.close();
            }

            this.lastTouchPosition.set(0, 0);
            this.movingSide = SIDES.NONE;
            this.movingAxes = AXES.NONE;
        }

        window.addEventListener("touchend", onTouchend.bind(this));
        this.overlay.addEventListener("touchstart", elementTouchStart.bind(this));
        this.overlay.addEventListener("touchend", onTouchend.bind(this));


    }

    handleSidenavStartTouch(e) {
        this.lastTouchPosition = getTouchPositionFromEvent(e);
        if (this.lastTouchPosition.x <= 30)
            this.moving = true;
    }

    updateElement() {
        setCSSVarProperty("sidenav-translateX", this.translateX + "px");
        setCSSVarProperty("sidenav-opacity", this.computeOpacity());
    }

    addRightTranslate(value) {
        this.translateX = (this.translateX - value >= this.maxWidth) ? this.maxWidth : (this.translateX - value);
    }

    addLeftTranslate(value) {
        this.translateX = (this.translateX + value <= 0) ? this.maxWidth : (this.translateX - value);
        if (this.translateX <= 0) this.translateX = 0;
    }

    addTranslateX(value) {
        switch (this.movingSide) {
            case SIDES.RIGHT:
                this.addRightTranslate(value);
                break;
            case SIDES.LEFT:
                this.addLeftTranslate(value);
                break;
            default: ;
        }

        this.onTranslateChange();
    }

    makeDragEnable() {
        this._canBeDragged = true;
    }

    makeDragDisable() {
        this._canBeDragged = false;
    }

    setTranslateX(value) {
        this.translateX = (this.translateX > this.maxWidth) ? this.maxWidth : value;
        this.onTranslateChange();
    }

    open() {
        this.element.classList.add("active");
        this.overlay.classList.add("active");
        this.setTranslateX(this.maxWidth);
        this.setVisible(true);
    }

    close() {
        this.element.classList.add("active");
        this.overlay.classList.remove("active");
        this.setTranslateX(0);
        this.setVisible(false);
    }


    computeOpacity() {
        return this.translateX / this.maxWidth;
    }
}

function getTouchPositionFromEvent(e) {
    const { clientX, clientY } = e.touches[0];
    return new Vector(clientX, clientY);
}

function setCSSVarProperty(varName, value) {
    document.body.style.setProperty("--" + varName, value);
}




class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static computeSideInXAxi(distance) {
        return distance < 0 ? SIDES.RIGHT : SIDES.LEFT;
    }

    static computeSideInYAxi(distance) {
        return distance < 0 ? SIDES.BOTTOM : SIDES.TOP;
    }

    static computeAxes(movingSide, lastPosition, currentPosition) {
        const diference = lastPosition.substract(currentPosition);

        if (Math.abs(diference.x) < Math.abs(diference.y) && movingSide === SIDES.NONE)
            return AXES.Y;

        return AXES.X;
    }

    substract(position) {
        return new Vector(this.x - position.x, this.y - position.y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
