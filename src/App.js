import React, { useState, useEffect } from "react";
import Settings from "./Settings";
import Matches from "./Matches";
import { GlobalStyle } from "./GlobalStyle";

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
  const [isGameStarted, setIsGameStarted] = useStateItem(
    "isGameStarted",
    false
  );
  const [playersStats, setPlayersStats] = useStateItem("playersStats", []);
  const [gameMode, setGameMode] = useStateItem("gameMode", "single");

  const removePlayer = (name) => {
    setPlayers((players) => players.filter((player) => player.name !== name));
  };

  const addNewPlayer = (name) => {
    if (players && players.find((player) => player.name === name)) {
      return;
    }

    setPlayers((players) => [...players, { name }]);
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const generateMatches = (mode) => {
    let matchesTemplate = [];
    const playersTemplate = shuffle([...players]);
    let gameSize = playersTemplate.length;

    //first double queue, in two loops because of sorting (we don't want [ab, bc, cd] etc.)
    for (let i = 0; i < 2; i++) {
      for (let a = i; a < gameSize; a = a + 2) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: playersTemplate[a].name,
          player2: playersTemplate[(a + 1) % gameSize].name,
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
          player1: playersTemplate[y].name,
          player2: playersTemplate[(y + i + 1) % gameSize].name,
          goal1: "",
          goal2: "",
        });
      }
    }

    //last single or double queue, depends on even or odd players number
    if (gameSize % 2 === 0) {
      for (let i = 0; i < gameSize / 2; i++) {
        matchesTemplate.push({
          id: matchesTemplate.length,
          player1: playersTemplate[i].name,
          player2: playersTemplate[(i + gameSize / 2) % gameSize].name,
          goal1: "",
          goal2: "",
        });
      }
    }

    if (mode === "volta") {
      gameSize = matchesTemplate.length;
      const playersDoubleTemplate = matchesTemplate.map(
        ({ player1, player2 }) => [player1, player2]
      );
      matchesTemplate = [];
      for (let i = 0; i < 2; i++) {
        for (let a = i; a < gameSize; a = a + 2) {
          matchesTemplate.push({
            id: matchesTemplate.length,
            player1: playersDoubleTemplate[a][0],
            player3: playersDoubleTemplate[a][1],
            player2: playersDoubleTemplate[(a + 1) % gameSize][0],
            player4: playersDoubleTemplate[(a + 1) % gameSize][1],
            goal1: "",
            goal2: "",
          });
        }
      }

      for (let i = 1; i < Math.floor((gameSize - 1) / 2); i++) {
        for (let y = 0; y < gameSize; y++) {
          matchesTemplate.push({
            id: matchesTemplate.length,
            player1: playersDoubleTemplate[y][0],
            player3: playersDoubleTemplate[y][1],
            player2: playersDoubleTemplate[(y + i + 1) % gameSize][0],
            player4: playersDoubleTemplate[(y + i + 1) % gameSize][1],
            goal1: "",
            goal2: "",
          });
        }
      }

      if (gameSize % 2 === 0) {
        for (let i = 0; i < gameSize / 2; i++) {
          matchesTemplate.push({
            id: matchesTemplate.length,
            player1: playersDoubleTemplate[i][0],
            player3: playersDoubleTemplate[i][1],
            player2: playersDoubleTemplate[(i + gameSize / 2) % gameSize][0],
            player4: playersDoubleTemplate[(i + gameSize / 2) % gameSize][1],
            goal1: "",
            goal2: "",
          });
        }
      }

      matchesTemplate = matchesTemplate.filter(
        (match) =>
          !(
            match.player1 === match.player2 ||
            match.player1 === match.player4 ||
            match.player3 === match.player2 ||
            match.player3 === match.player4
          )
      );

      let counter = 0;
      matchesTemplate = matchesTemplate.map((match) => ({
        ...match,
        id: counter++,
      }));
    }
    setMatches(matchesTemplate);
  };

  return (
    <>
      <GlobalStyle />
      {isGameStarted ? (
        <Matches
          matches={matches}
          setMatches={setMatches}
          players={players}
          playersStats={playersStats}
          setPlayersStats={setPlayersStats}
          setIsGameStarted={setIsGameStarted}
          gameMode={gameMode}
        />
      ) : (
        <Settings
          players={players}
          addNewPlayer={addNewPlayer}
          removePlayer={removePlayer}
          isGameStarted={isGameStarted}
          setIsGameStarted={setIsGameStarted}
          generateMatches={generateMatches}
          setGameMode={setGameMode}
        />
      )}
    </>
  );
}

export default App;
