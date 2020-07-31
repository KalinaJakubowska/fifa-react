import React from "react";
import ResetButton from "./ResetButton";
import EditPlayersButton from "./EditPlayersButton";
import Match from "./Match";
import "./style.css";

const Matches = ({ matches, setMatches, setIsGameStarted, setIsEditEnabled }) => {
    return (
        <>
            <EditPlayersButton
                setIsEditEnabled={setIsEditEnabled}
            />
            <div className="matches">
                {matches && matches.map(match =>
                    <Match key={match.id} id={match.id} match={match} matches={matches} setMatches={setMatches} />
                )}
            </div>
            <ResetButton setIsGameStarted={setIsGameStarted} />
        </>
    )
}

export default Matches;