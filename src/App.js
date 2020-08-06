import React, { useState, useEffect } from 'react';
import Settings from "./Settings";
import Matches from "./Matches";

const saveInLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
}

const getFromLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
}

function App() {
  const [players, setPlayers] = useState(getFromLocalStorage("players") || "");
  const [matches, setMatches] = useState(getFromLocalStorage("matches") || "");
  const [isGameStarted, setIsGameStarted] = useState(getFromLocalStorage("isGameStarted" || false));
  const [playersStats, setPlayersStats] = useState(getFromLocalStorage("playersStats") || []);
  const [isEditEnabled, setIsEditEnabled] = useState(getFromLocalStorage("isEditEnabled") || false);

  useEffect(() => {
    saveInLocalStorage("players", players);
  }, [players]);

  useEffect(() => {
    saveInLocalStorage("matches", matches);
  }, [matches]);

  useEffect(() => {
    saveInLocalStorage("isGameStarted", isGameStarted);
  }, [isGameStarted]);

  useEffect(() => {
    saveInLocalStorage("playersStats", playersStats);
  }, [playersStats]);

  useEffect(() => {
    saveInLocalStorage("isEditEnabled", isEditEnabled);
  }, [isEditEnabled]);

  const removePlayer = (id) => {
    setPlayers(players => players.filter(task => task.id !== id));
  };

  const addNewPlayer = (name) => {
    setPlayers(players => [
      ...players,
      {
        id: players.length,
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
          goal1: "",
          goal2: "",
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
          goal1: "",
          goal2: "",
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
          goal1: "",
          goal2: "",
        });
      }
    }
    if (isEditEnabled) {
      for (let matchT of matchesTemplate) {
        for (let match of matches) {
          const { goal1, goal2, player1, player2 } = match;
          if ((matchT.player1 === player1 && matchT.player2 === player2) ||
            (matchT.player1 === player2 && matchT.player2 === player1)) {
            matchT.goal1 = goal1;
            matchT.goal2 = goal2;
          }
        }
      };
      setIsEditEnabled(false);
    }
    setMatches(matchesTemplate);
  };

  if (!isGameStarted || isEditEnabled) {
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
  else {
    return (
      <div>
        <Matches
          matches={matches}
          setMatches={setMatches}
          players={players}
          playersStats={playersStats}
          setPlayersStats={setPlayersStats}
          setIsGameStarted={setIsGameStarted}
          setIsEditEnabled={setIsEditEnabled} />
      </div>
    )
  }
}

export default App;