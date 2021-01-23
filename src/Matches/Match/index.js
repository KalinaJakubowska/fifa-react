import React from "react";
import { MatchInput } from "./../../styledInput.js";
import {
  MatchFirstPlayer,
  MatchSecondPlayer,
  MatchGoal,
  MatchVS,
  MatchBox,
} from "./styled.js";

const Match = ({
  selectedMatch,
  setSelectedMatch,
  id,
  match,
  matches,
  setMatches,
  gameMode,
}) => {
  const onChange1 = ({ target }) => {
    setMatches((matches) =>
      matches.map((theMatch) => {
        if (theMatch.id === id) {
          return { ...theMatch, goal1: +target.value };
        }

        return theMatch;
      })
    );
  };
  const onChange2 = ({ target }) => {
    setMatches((matches) =>
      matches.map((theMatch) => {
        if (theMatch.id === id) {
          return { ...theMatch, goal2: +target.value };
        }

        return theMatch;
      })
    );
  };
  const onMatchClick = () => {
    setSelectedMatch(id);
  };

  return (
    <MatchBox onClick={onMatchClick} selected={selectedMatch === id}>
      <div>
        <MatchFirstPlayer>{matches[id].player1}</MatchFirstPlayer>
        {gameMode === "volta" && (
          <MatchFirstPlayer>{matches[id].player3}</MatchFirstPlayer>
        )}
      </div>
      <MatchGoal>
        {selectedMatch === id ? (
          <MatchInput type="number" value={match.goal1} onChange={onChange1} />
        ) : (
          match.goal1
        )}
      </MatchGoal>
      <MatchVS>VS</MatchVS>
      <MatchGoal>
        {selectedMatch === id ? (
          <MatchInput type="number" value={match.goal2} onChange={onChange2} />
        ) : (
          match.goal2
        )}
      </MatchGoal>
      <div>
        <MatchSecondPlayer>{matches[id].player2}</MatchSecondPlayer>
        {gameMode === "volta" && (
          <MatchSecondPlayer>{matches[id].player4}</MatchSecondPlayer>
        )}
      </div>
    </MatchBox>
  );
};

export default Match;
