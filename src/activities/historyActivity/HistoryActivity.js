import React, { useEffect, useState } from 'react'
import uniqueID from '../../helpers/uniqueID';
import "./HistoryActivity.css";

export default function HistoryActivity() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        console.log("did mount");
        setHistory([
            {
                date: "20/28/21",
                time: new Date().toGMTString(),
                corrects: 80,
                total: 100,
            },
            {
                date: "20/28/21",
                time: new Date().toGMTString(),
                corrects: 10,
                total: 100,
            }
        ])
    }, []);

    return (
        <section className="historyContainer">
            <h3>Juego</h3>
            <ul className="history">
                {history.map(data => <HistoryInfo key={uniqueID()} data={data} />)}
            </ul>
            <h3>Examen</h3>
            <ul className="history">
                {history.map(data => <HistoryInfo key={uniqueID()} data={data} />)}
            </ul>

        </section>
    )
}


function HistoryInfo({ data }) {
    const percent = data.corrects / data.total * 100;

    return <li className={`history__li ${percent >= 70 ? "approved" : ""}`} >
        <span>{data.date}</span>
        <span>{data.corrects}</span>
        <span>{data.total - data.corrects}</span>
        <span>{percent}%</span>
    </li>
}