import React, { useEffect, useRef, useState } from 'react';
import "./SwitchButton.css";

export default function SwitchButton({ handleSwitch, active }) {
    const [isActive, setIsActive] = useState(active);
    const inputRef = useRef();

    useEffect(() => {
        if (isActive)
            inputRef.current.checked = true;


    }, [isActive]);

    function _handleSwitch(e) {
        handleSwitch(e.target.checked)
    }

    return (
        <div className="switchButton">
            <input onInput={_handleSwitch} ref={inputRef} defaultValue="checked" role="switch" type="checkbox" />
            <span></span>
        </div>
    )
}

SwitchButton.defaultProps = {
    active: false,
    handleSwitch: new Function
};