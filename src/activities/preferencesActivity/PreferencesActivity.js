import React from 'react';
import InputColor from '../../components/inputColor/InputColor';
import SwitchButton from '../../components/switchButton/SwitchButton';
import "./PreferencesActivity.css";

export default function PreferencesActivity() {
    return (
        <section>
            <div className="preference">
                <p className="preference__title">Tranciciones</p>
                <SwitchButton></SwitchButton>
            </div>

            <div className="preference">
                <p className="preference__title">Tema oscuro</p>
                <SwitchButton></SwitchButton>
            </div>

            <div className="preference theme">
                <p className="preference__title">Tema secundario</p>
                <InputColor handleInput={
                    (e) => {
                        console.log(e.target.value);
                        document.querySelector("header").style.background = e.target.value;
                    }
                }></InputColor>

            </div>
        </section>
    )
}
