import React from 'react';
import { useState } from 'react/cjs/react.development';
import uniqueID from "../../helpers/uniqueID";
import Button from '../button/Button';
import "./Question.css";


export default function Question({ onNext, onSelectAnswer, question }) {


    const id = `question-${uniqueID()}`;
    function handleSelectAnswer(option) {
        onSelectAnswer(option);
    }
    return (
        <div className="wrapper question">
            <p className="question__statement paragraph">
                {question.question}
            </p>
            <ul className="question__options">
                {question.options.map(op => {
                    const optionId = `option-${uniqueID()}`;
                    return <li className="question__option" key={uniqueID()} onClick={() => handleSelectAnswer(op)}>
                        <input type="radio" name={id} id={optionId} />
                        <label htmlFor={optionId}>{op}</label>
                    </li>
                })}
            </ul>
            <div className="flex flexCenterX">
                <Button onClick={onNext}>Siguiente</Button>
            </div>
        </div>
    )
}
