import { BrowserRouter as Router, Link } from "react-router-dom";
import "./HomeCard.css";



export default function HomeCard({ title, description, bgurl, to }) {
    const style = {
        backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.7)),
        url(${bgurl})`
    }
    return (
        <Link to={to}>
            <div className="homeCard" style={style}>
                <h3 className="homeCard__title">{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}