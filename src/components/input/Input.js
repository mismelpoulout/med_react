import React from 'react';
import "./Input.css";
import uniqueID from "../../helpers/uniqueID.js";

export default function Input({ type, label }) {
    const id = `input-${uniqueID()}`;
    return (
        <div className="input">
            <input id={id} type={type} className="input__input" required></input>
            <label htmlFor={id} className="input__label">{label}</label>
        </div>
    )
}

