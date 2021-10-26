import React from 'react';
import "./CreatorActivity.css";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import CircleButton from '../../components/circleButton/CircleButton';

export default function CreatorActivity() {
    return (
        <section>
            <div id="step-1" className="creatorStep wrapper">
                <Title>Escribe tu pregunta</Title>

                {/*<textarea rows="20" className="creatorStep__textArea" placeholder="Escribe el enunciado de tu pregunta..."></textarea>

                <input type="file"></input>*/}
                <div className="flex flexCenterX">
                    <CircleButton icon={<img className="icon" src="/assets/icons/plus.svg" />} />
                </div>

                <div className="creatorStep__actions flex flexCenterX">
                    <Button>Siguiente</Button>
                </div>
            </div>

            <div id="step-2" className="creatorStep wrapper">
                <Title>Agrega respuestas a tu pregunta</Title>


                <textarea className="creatorStep__textArea" placeholder="Escribe una posible respuesta..."></textarea>
                <Button bgColor="#eee" textColor="#666">Agregar</Button>


                <div className="creatorStep__actions flex flexCenterX">
                    <Button>Anterior</Button>
                    <Button>Siguiente</Button>
                </div>
            </div>

            <div id="step-3" className="creatorStep wrapper">
                <Title>Feedback</Title>
                <p className="paragraph">Dinos por qué la respuesta seleccionada es correcta</p>


                <textarea rows="15" className="creatorStep__textArea" placeholder="feedback..."></textarea>


                <div className="creatorStep__actions flex flexCenterX">
                    <Button>Anterior</Button>
                    <Button>Siguiente</Button>
                </div>
            </div>

            <div id="step-4" className="creatorStep wrapper">
                <Title>Preview</Title>
                <p className="paragraph">Así se vera tu pregunta!</p>


                <textarea rows="15" className="creatorStep__textArea" placeholder="feedback..."></textarea>


                <div className="creatorStep__actions flex flexCenterX">
                    <Button>Anterior</Button>
                    <Button>Enviar</Button>
                </div>
            </div>
        </section>
    )
}
