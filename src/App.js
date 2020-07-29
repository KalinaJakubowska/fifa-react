import React, { useState } from 'react';
import Settings from "./Settings";

function App() {
  const [players, setPlayers] = useState(
    localStorage.getItem("players") === null ? "" : JSON.parse(localStorage.getItem("players"))
  );

  const removePlayer = (id) => {
    setPlayers(players => players.filter(task => task.id !== id));
  };

  const addNewPlayer = (name) => {
    setPlayers(players => [
      ...players,
      {
        name,
        done: false,
        id: players.length ? players[players.length - 1].id + 1 : 1,
      }
    ])
  };

  return (
    <Settings
      players={players}
      addNewPlayer={addNewPlayer}
      removePlayer={removePlayer}
    />


  )
}

export default App;
