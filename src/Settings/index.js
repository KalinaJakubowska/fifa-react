import React from "react";
import "./style.css"
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";

const Settings = ({ players, addNewPlayer, removePlayer, generateMatches, setIsGameStarted }) => {

  const onStartButtonClick = () => {
    generateMatches();
    setIsGameStarted(true);
  }

  return (
    <div className="settings">
      <div className="settings__container">
        <h2 className="settings__header">Lista graczy:</h2>
      </div>
      <SettingsForm
        addNewPlayer={addNewPlayer}
      />

      <SettingsPlayers
        players={players}
        removePlayer={removePlayer}
      />

      <button
        onClick={onStartButtonClick}
        disabled={players.length < 3}
        className="buttons__button buttons__button--center"
      >
        Rozpocznij turniej!
      </button>
    </div>
  );
}

export default Settings;