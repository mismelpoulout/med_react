import React, { useState } from 'react';
import uniqueID from '../../helpers/uniqueID';
import Input from '../input/Input';
import "./InputImage.css";

export default function InputImage({ size }) {
    const [image, setImage] = useState("/assets/icons/user.svg");
    const id = "inputImage-" + uniqueID();

    function handleInput(e) {
        const files = e.target.files;
        if (files.length === 0) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            setImage(event.target.result)
        };
        reader.readAsDataURL(files[0]);

    }

    return (
        <div>
            <label htmlFor={id}>
                <div className="imageSelected" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: size
                }}></div>
            </label>
            <input onChange={handleInput} className="imageInput" id={id} type="file" />
        </div >
    )
}

Input.defaultProps = {
    size: "contain"
}