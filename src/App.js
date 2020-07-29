import React from 'react';
import Settings from "./Settings";
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";

function App() {
  return (
    <Settings
      form={
        <SettingsForm />
      }
      players={
        <SettingsPlayers />
      } />

  )
}

export default App;
