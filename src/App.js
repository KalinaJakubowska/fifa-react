import React, { useState } from 'react';
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
      }
    ])
  };

  const generateMatches = () => {
    let matchesTemplate = [];
    const gameSize = players.length;
    //first double queue, in two loops because of sorting (we don't want [ab, bc, cd] etc.)

    for (let i = 0; i < 2; i++) {
      for (let a = i; a < gameSize; a = a + 2) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: players[a].name,
          player2: players[(a + 1) % gameSize].name,
          goal1: "-",
          goal2: "-",
        });
      }
    }

    //all double middle queues
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

    //last single or double queue, depends on even or odd players number
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
    setMatches(matchesTemplate);
  };

  if (isGameStarted) {
    return (
      <div>
        <Matches matches={matches} players={players} setIsGameStarted={setIsGameStarted} />
      </div>
    )
  }
  else {
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
      </div>
    )
  }
}

export default App;