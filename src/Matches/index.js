import React from "react";
import "./style.css";

const Matches = ({ matches, players }) => {
    return (
        <div className="matches">
            {matches && matches.map(({ id, player1, player2, goal1, goal2 }) =>
                (<div key={id} className="match">
                    <div className="match__item match__item--player">{player1}</div>
                    <div className="match__item match__item--goal">{goal1}</div>
                    <div className="match__item match__item--vs">VS</div>
                    <div className="match__item match__item--goal">{goal2}</div>
                    <div className="match__item match__item--player">{player2}</div>
                </div>)
            )}
        </div>
    )
}

export default Matches;