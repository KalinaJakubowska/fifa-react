import React, { useState, useEffect } from 'react';
import Settings from "./Settings";
import Matches from "./Matches";

function App() {
  const [players, setPlayers] = useState(
    localStorage.getItem("players") === null ? "" : JSON.parse(localStorage.getItem("players")));
  const [matches, setMatches] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);

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
      matchesTemplate.push({
        id: matchesTemplate.length,
        player1: players[a].name,
        player2: players[(a + 1) % gameSize].name,
        goal1: "-",
        goal2: "-",
      });
    }

    for (let b = 1; b < gameSize; b = b + 2) {
      matchesTemplate.push({
        id: matchesTemplate.length,
        player1: players[b].name,
        player2: players[(b + 1) % gameSize].name,
        goal1: "-",
        goal2: "-",
      });
    }

    for (let i = 1; i < Math.floor((gameSize - 1) / 2); i++) {
      for (let y = 0; y < gameSize; y++) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: players[y].name,
          player2: players[(y + i + 1) % gameSize].name,
          goal1: "-",
          goal2: "-",
        });
      }
    }

    if ((gameSize % 2) === 0) {
      for (let c = 0; c < gameSize / 2; c++) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: players[c].name,
          player2: players[(c + gameSize / 2) % gameSize].name,
          goal1: "-",
          goal2: "-",
        });
      }
    }
console.log("x")
    setMatches(matchesTemplate);
  };

  return (
    <div>
      <Settings
        players={players}
        addNewPlayer={addNewPlayer}
        removePlayer={removePlayer}
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
        generateMatches={generateMatches}
      />

      <Matches matches={matches} players={players} />
    </div>
  )
}

export default App;