import React, { useEffect, useRef } from 'react';
import loadImageDataURL from '../../helpers/loadImageDataURL';
import "./CardLink.css";

export default function CardLink({ title, icon, altIcon, linkTo, onClick }) {
    const imgRef = useRef();

    function handleClick() {
        onClick({ title });
    }

    useEffect(() => {
        async function loadImage() {
            const img = await loadImageDataURL(icon);
            if (imgRef.current)
                imgRef.current.src = img;
        }
        loadImage();
    }, [])

    return (
        <li className="cardLink flex flexCenterY" onClick={handleClick}>
            <img ref={imgRef} className="cardLink__icon" src="/loading.svg" alt={altIcon} />
            <h3 className="cardLink__title">{title}</h3>
        </li>
    )
}


CardLink.defaultProps = {
    onClick: function () { }
}