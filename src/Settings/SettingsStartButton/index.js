import React from "react";
import "./style.css"

const SettingsStartButton = ({ players, generateMatches }) => (
    <button
        onClick={generateMatches}
        disabled={players.length < 3}
        className="buttons__button"
    >
        Rozpocznij turniej!
    </button>
);

export default SettingsStartButton;