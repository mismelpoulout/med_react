import React from 'react';
import "./SidenavActivity.css";
import { Link } from 'react-router-dom';
import Sidenav from '../../components/sidenav/Sidenav';

export default function SidenavActivity() {
    return (
        <Sidenav visible={false}>
            <div className="sidenav__logo">
                <img src="/assets/icons/logo.png"></img>
            </div>
            <ul className="sidenav__ul">
                <li className="sidenav__ul__li">
                    <img className="sidenav__icon" src="/assets/icons/settings.svg"></img>
                    <Link to="/preferencias">preferencias</Link>
                </li>
                <li className="sidenav__ul__li">

                    <img className="sidenav__icon" src="/assets/icons/about.svg"></img>
                    <Link to="/login">acerca de</Link>
                </li>

                <li className="sidenav__ul__li">
                    <img className="sidenav__icon" src="/assets/icons/settings.svg"></img>
                    <Link to="/policy">Politicas de privacidad</Link>
                </li>

                <li className="sidenav__ul__li">
                    <img className="sidenav__icon" src="/assets/icons/comment.svg"></img>
                    <Link to="/login">commentarios</Link>
                </li>
            </ul>
        </Sidenav>
    )
}