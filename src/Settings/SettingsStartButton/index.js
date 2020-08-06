import React from "react";

const SettingsStartButton = ({ players, generateMatches, setIsGameStarted }) => {

    const onButtonClick = () => {
        generateMatches();
        setIsGameStarted(true);
    }

    return (
        <button
            onClick={onButtonClick}
            disabled={players.length < 3}
            className="buttons__button buttons__button--center"
        >
            Rozpocznij turniej!
        </button>
    );
}

export default SettingsStartButton;