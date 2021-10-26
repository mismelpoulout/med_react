import React, { memo } from 'react';
import CardLink from '../../components/cardLink/CardLink';

import topicsJSON from "../../helpers//data-topic.json";
import uniqueID from '../../helpers/uniqueID';

function StudyActivity() {

    function handleClick({ title }) {
        console.log(title)
    }


    const topics = topicsJSON.map(topic => {
        const icon = `/assets/icons/${topic.icon}.svg`;
        return (

            <CardLink
                key={uniqueID()}
                title={topic.name}
                icon={icon}
                altIcon={topic.icon}
                onClick={handleClick}
            />

        )
    })

    return (
        <div>
            <nav>
                <ul className="grid">
                    {topics}
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/F de medicina.png"
                        title="Resumenes Facultad de medicina Universidad de Chile"
                    />
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/amir.png"
                        title="Manual Mir 12da edición"
                    />
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/audio.svg"
                        title="Audios"
                    />
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/guias_minsal.jpg"
                        title="Guias clinicas Minsal"
                    />
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/drguevara.png"
                        title="Resumenes Dr Guevara"
                    />
                    <CardLink
                        onClick={handleClick}
                        icon="/assets/icons/youtube.svg"
                        title="Videos Dr Guevar"
                    />
                </ul>
            </nav>
        </div>
    )
}

export default memo(StudyActivity);