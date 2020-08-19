import React from "react";
import SettingsForm from "./SettingsForm";
import SettingsPlayers from "./SettingsPlayers";
import { CenteredButton } from "./../styledButtons.js";
import { HeaderContainer, SettingsContainer, SettingsHeader } from "./styled.js";

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
    <SettingsContainer>
      <HeaderContainer>
        <SettingsHeader>Lista graczy:</SettingsHeader>
      </HeaderContainer>
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
        disabled={players.length < 4}
      >
        Rozpocznij turniej Volta!
      </CenteredButton>
    </SettingsContainer>
  );
}

export default Settings;