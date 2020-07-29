import React, { useState, useEffect } from 'react';

function App() {
  const [players, setPlayers] = useState(["Marcin", "Mowin", "Kalina", "Sikor", "Papa", "Pierun"]);
  const [matches, setMatches] = useState('');

  const generateMatches = () => {
    let matchesTemplate = [];
    const gameSize = players.length;
    for (let a = 0; a < gameSize; a = a + 2) {
      matchesTemplate.push(players[a] + players[(a + 1) % gameSize]);

    }
    for (let b = 1; b < gameSize; b = b + 2) {
      matchesTemplate.push(players[b] + players[(b + 1) % gameSize]);
    }

    for (let i = 1; i < Math.floor((gameSize - 1) / 2); i++) {

      for (let y = 0; y < gameSize; y++) {
        matchesTemplate.push(players[y] + players[(y + i + 1) % gameSize]);
      }
    }

    if ((gameSize % 2) === 0) {
      for (let c = 0; c < gameSize / 2; c++) {
        matchesTemplate.push(players[c] + players[(c + gameSize / 2) % gameSize]);
      }
    }

    console.log(matches);
    setMatches(matchesTemplate);
  };

  useEffect(() => {
    generateMatches();
  }, [players]);

  return (
    <div className="App">
      {matches}
    </div>
  );
}

export default App;
