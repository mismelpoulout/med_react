import React from 'react'
import uniqueID from '../../helpers/uniqueID';

import "./InputColor.css";

const colors = ["#0078d7", "#3f51b5", "#673ab7", "#4caf50", "#607d8b", "#dd1a5c"];

export default function InputColor({ handleInput }) {

    const inputs = colors.map(color => {
        return (
            <label style={{ background: color }} htmlFor={color} className="inputColor" key={uniqueID()} >
                <input id={color} onInput={handleInput} value={color} name="color" type="radio"></input>
            </label>
        )
    })

    return (
        <div className="colorsContainer">
            {inputs}
        </div>
    )
}
