import React, { useState, useEffect } from 'react';
import Settings from "./Settings";
import Matches from "./Matches";

const useStateItem = (keyName, initialValue) => {
  const getInitialState = () => {
    if (localStorage.getItem(keyName) === null) {
      return initialValue;
    }
    return JSON.parse(localStorage.getItem(keyName));
  };

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

function App() {
  const [players, setPlayers] = useStateItem("players", "");
  const [matches, setMatches] = useStateItem("matches", "");
  const [isGameStarted, setIsGameStarted] = useStateItem("isGameStarted", false);
  const [playersStats, setPlayersStats] = useStateItem("playersStats", []);
  // const [isEditEnabled, setIsEditEnabled] = useStateItem("isEditEnabled", false);

  const removePlayer = (name) => {
    setPlayers(players => players.filter(player => player.name !== name));
  };

  const addNewPlayer = (name) => {
    if (players && players.find(player => player.name === name)) {
      return;
    }

    setPlayers(players => [
      ...players, { name }
    ])
  };

  // const copyMatches = (matchesTemplate) => {
  //   for (let matchT of matchesTemplate) {
  //     for (let match of matches) {
  //       const { goal1, goal2, player1, player2 } = match;
  //       if ((matchT.player1 === player1 && matchT.player2 === player2) ||
  //         (matchT.player1 === player2 && matchT.player2 === player1)) {
  //         matchT.goal1 = goal1;
  //         matchT.goal2 = goal2;
  //       }
  //     }
  //   };
  //   setIsEditEnabled(false);
  // }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

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
      for (let i = 0; i < gameSize / 2; i++) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: players[i].name,
          player2: players[(i + gameSize / 2) % gameSize].name,
          goal1: "",
          goal2: "",
        });
      }
    }
    // if (isEditEnabled) {
    //   copyMatches(matchesTemplate);
    // }
    setMatches(matchesTemplate);
  };

  if (!isGameStarted 
    // || isEditEnabled
    ) {
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
          // setIsEditEnabled={setIsEditEnabled} 
          />
      </div>
    )
  }
}

export default App;