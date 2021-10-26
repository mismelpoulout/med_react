import React from 'react';

import "./CircleButton.css";

export default function CircleButton({ icon, onClick, bgcolor }) {
    return (
        <button className="btnCircle" style={{ backgroundColor: bgcolor }} onClick={onClick}>
            {icon}
        </button>
    )
}

CircleButton.defaultProps = {
    bgcolor: "rgba(0, 0, 0, 0.1)"
}

