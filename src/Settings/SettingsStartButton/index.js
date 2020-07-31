import React from "react";
import "./style.css"

const SettingsStartButton = ({ players, generateMatches, setIsGameStarted }) => {

    const onButtonClick = () => {
        generateMatches();
        setIsGameStarted(true);
    }

    return (
        <button
            onClick={onButtonClick}
            disabled={players.length < 3}
            className="buttons__button"
        >
            Rozpocznij turniej!
        </button>
    );
}

export default SettingsStartButton;