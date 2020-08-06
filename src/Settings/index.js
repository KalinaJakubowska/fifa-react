import React from "react";
import "./style.css"
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";
import SettingsStartButton from "./SettingsStartButton";

const Settings = ({ players, addNewPlayer, removePlayer, generateMatches, setIsGameStarted }) => (
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

    <SettingsStartButton
      players={players}
      generateMatches={generateMatches}
      setIsGameStarted={setIsGameStarted}
    />
  </div>
);

export default Settings;