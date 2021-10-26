import React, { useState } from 'react';
import "./InputRange.css";

export default function InputRange({ min, max, step, handleInput, label }) {
    const [value, setValue] = useState(min);

    function _handleInput({ target }) {
        setValue(target.value);
        handleInput(target.value);
    }

    return <div className="inputRangeContainer">
        <input type="range" defaultValue={min} min={min} max={max} step={step} onInput={_handleInput} />
        <p>{value} {label}</p>
    </div>
}

InputRange.defaultProps = {
    handleInput: new Function
}