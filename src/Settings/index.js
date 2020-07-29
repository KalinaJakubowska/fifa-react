import React from "react";
import "./style.css"
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";
import SettingsStartButton from "./SettingsStartButton";

const Settings = ({ players, addNewPlayer, removePlayer, generateMatches }) => (
  <div className="settings">
    <div className="settings__container">
      <h2 className="settings__header">tytuł</h2>
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
    />
  </div>
);

export default Settings;