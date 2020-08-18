import React from "react";
import "./style.css"
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";
import { CenteredButton } from "./../styledButtons.js";

const Settings = ({
  players,
  addNewPlayer,
  removePlayer,
  generateMatches,
  setIsGameStarted,
  setGameMode
}) => {

  const onStartButtonClickSingle = () => {
    generateMatches("single");
    setIsGameStarted(true);
    setGameMode("single");
  }

  const onStartButtonClickVolta = () => {
    generateMatches("volta");
    setIsGameStarted(true);
    setGameMode("volta")
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
        onClick={onStartButtonClickSingle}
        disabled={players.length < 3}
      >
        Rozpocznij turniej single!
      </CenteredButton>
      <CenteredButton
        onClick={onStartButtonClickVolta}
        disabled={players.length < 3}
      >
        Rozpocznij turniej Volta!
      </CenteredButton>
    </div>
  );
}

export default Settings;