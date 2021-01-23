import React from "react";
import { RemovePlayerButton, PlayerName, PlayerBox, Players } from "./styled";

const SettingsPlayers = ({ players, removePlayer }) => {
  if (!players.length) {
    return null;
  }

  return (
    <Players>
      {players.map(({ name }) => (
        <PlayerBox key={name}>
          <PlayerName>{name}</PlayerName>
          <RemovePlayerButton onClick={() => removePlayer(name)} />
        </PlayerBox>
      ))}
    </Players>
  );
};

export default SettingsPlayers;
