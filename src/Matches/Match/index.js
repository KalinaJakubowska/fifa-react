import React from "react";
import "./style.css";

const Match = ({ id, match, matches, setMatches }) => {
    const onChange1 = ({ target }) => {
        setMatches(matches => matches.map(theMatch => {
            if (theMatch.id === id) {
                return { ...theMatch, goal1: target.value }
            }
            return theMatch
        }));
    }
    const onChange2 = ({ target }) => {
        setMatches(matches => matches.map(theMatch => {
            if (theMatch.id === id) {
                return { ...theMatch, goal2: target.value }
            }
            return theMatch
        }));
    }

    return (
        <div className="match">
            <div className="match__item match__item--player">{matches[id].player1}</div>
            <div className="match__item match__item--goal">
                <input value={match.goal1} onChange={onChange1} />
            </div>
            <div className="match__item match__item--vs">VS</div>
            <div className="match__item match__item--goal">
                <input value={match.goal2} onChange={onChange2} />
            </div>
            <div className="match__item match__item--player">{matches[id].player2}</div>
        </div>
    )
}

export default Match;