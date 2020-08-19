import React from "react";
import "./style.css";

const Match = ({
    selectedMatch,
    setSelectedMatch,
    id,
    match,
    matches,
    setMatches,
    gameMode
}) => {
    const onChange1 = ({ target }) => {
        setMatches(matches => matches.map(theMatch => {
            if (theMatch.id === id) {
                return { ...theMatch, goal1: +target.value }
            }

            return theMatch
        }));
    }
    const onChange2 = ({ target }) => {
        setMatches(matches => matches.map(theMatch => {
            if (theMatch.id === id) {
                return { ...theMatch, goal2: +target.value }
            }

            return theMatch
        }));
    }
    const onMatchClick = () => {
        setSelectedMatch(id);
    }

    return (
        <div
            onClick={onMatchClick}
            className={`match${selectedMatch === id ? " match--selected" : ""}`}
        >
            <div>
                <div className="match__item match__item--player">
                    {matches[id].player1}
                </div>
                {gameMode === "volta" &&
                    <div className="match__item match__item--player">
                        {matches[id].player3}
                    </div>
                }
            </div>
            <div className="match__item match__item--goal">
                {selectedMatch === id
                    ? <input
                        type="number"
                        className="match__input"
                        value={match.goal1}
                        onChange={onChange1}
                    />
                    : match.goal1}

            </div>
            <div className="match__item match__item--vs">VS</div>
            <div className="match__item match__item--goal">
                {selectedMatch === id
                    ? <input
                        type="number"
                        className="match__input"
                        value={match.goal2}
                        onChange={onChange2}
                    />
                    : match.goal2}
            </div>
            <div>
                <div className="match__item match__item--player">
                    {matches[id].player2}
                </div>
                {gameMode === "volta" &&
                    <div className="match__item match__item--player">
                        {matches[id].player4}
                    </div>
                }
            </div>
        </div>
    )
}

export default Match;