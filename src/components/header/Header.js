import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


export default function Header({ title, handleClickMenu }) {
    return (
        <header>
            <div className="flex flexCenterY flexCenterX">
                <img
                    onClick={handleClickMenu}
                    className="icon"
                    src="/assets/icons/menu.svg"
                    alt="sidenav"
                />
                <h1>{title}</h1>

            </div>
            <Link to="/account">
                <img
                    className="icon"
                    src="/assets/icons/user.svg"
                    alt="account"
                />
            </Link>
        </header>
    )
}
