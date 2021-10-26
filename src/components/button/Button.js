import React, { useEffect, useRef } from 'react';
import "./Button.css";

export default function Button({ bgColor, textColor, children, onClick }) {
    const btnRef = useRef();

    useEffect(() => {
        btnRef.current.addEventListener("click", (e) => {
            const { offsetLeft, offsetTop } = e.target;
            const { clientX, clientY } = e;

            const wave = document.createElement("div");
            wave.style.left = `${clientX - offsetLeft}px`;
            wave.style.top = `${clientY - offsetTop + window.pageYOffset}px`
            wave.classList.add("buttonWave");
            btnRef.current.appendChild(wave);

            setTimeout(() => wave.remove(), 1500);
        })
    }, []);

    return (
        <button ref={btnRef} style={{ background: bgColor, color: textColor }} className="button" onClick={onClick}>
            {children}

        </button>
    )
}

Button.defaultProps = {
    bgColor: "var(--secundary-bg)",
    textColor: "#fff"
}