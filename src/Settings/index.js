import React from "react";
import "./style.css"
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";
import { CenteredButton } from "./../styledButtons.js";

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

      <CenteredButton
        onClick={onStartButtonClick}
        disabled={players.length < 3}
      >
        Rozpocznij turniej!
      </CenteredButton>
    </div>
  );
}

export default Settings;