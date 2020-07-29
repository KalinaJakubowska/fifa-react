import React, { useState, useEffect } from 'react';
import Settings from "./Settings";

function App() {
  const [players, setPlayers] = useState(
    localStorage.getItem("players") === null ? "" : JSON.parse(localStorage.getItem("players")));
  const [matches, setMatches] = useState('');

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

  const generateMatches = () => {
    let matchesTemplate = [];
    const gameSize = players.length;
    for (let a = 0; a < gameSize; a = a + 2) {
      matchesTemplate.push(players[a].name + players[(a + 1) % gameSize].name);

    }
    for (let b = 1; b < gameSize; b = b + 2) {
      matchesTemplate.push(players[b].name + players[(b + 1) % gameSize].name);
    }

    for (let i = 1; i < Math.floor((gameSize - 1) / 2); i++) {

      for (let y = 0; y < gameSize; y++) {
        matchesTemplate.push(players[y].name + players[(y + i + 1) % gameSize].name);
      }
    }

    if ((gameSize % 2) === 0) {
      for (let c = 0; c < gameSize / 2; c++) {
        matchesTemplate.push(players[c].name + players[(c + gameSize / 2) % gameSize].name);
      }
    }

    setMatches(matchesTemplate);
  };

  useEffect(() => {
    generateMatches();
  }, [players]);

  return (
    <div>
      <Settings
        players={players}
        addNewPlayer={addNewPlayer}
        removePlayer={removePlayer}
      />
    </div>
  )
}

export default App;