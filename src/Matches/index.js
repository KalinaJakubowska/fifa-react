import React from "react";
import "./style.css";

const Matches = ({ matches, players }) => {
    return (
        <div className="matches">
            {matches && matches.map(({ id, player1, player2, goal1, goal2 }) =>
                (<ul key={id} className="match">
                    <li className="match__item">{player1}</li>
                    <li className="match__item">{goal1}</li>
                    <li className="match__item">VS</li>
                    <li className="match__item">{goal2}</li>
                    <li className="match__item">{player2}</li>
                </ul>)
            )}
        </div>
    )
}

export default Matches;