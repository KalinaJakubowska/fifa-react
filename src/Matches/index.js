import React, { useEffect } from "react";
import ResetButton from "./ResetButton";
import EditPlayersButton from "./EditPlayersButton";
import Match from "./Match";
import ResultsTable from "./ResultsTable";
import "./style.css";

const Matches = ({ matches, setMatches, players, setPlayersStats, setIsGameStarted, setIsEditEnabled }) => {

    useEffect(() => {
        addStats();
    }, [matches]);

    const addStats = () => {
        let playersStatsTemplate = [];

        for (const player of players) {
            playersStatsTemplate = [
                ...playersStatsTemplate,
                {
                    name: player.name,
                    goalsScored: 0,
                    goalsConceded: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                },
            ]
        }

        for (const match of matches) {
            if (match.goal1 || match.goal2) {
                for (const playerStatsTemplate of playersStatsTemplate) {
                    if (match.player1 === playerStatsTemplate.name) {
                        playerStatsTemplate.goalsScored += +match.goal1;
                        playerStatsTemplate.goalsConceded += +match.goal2;
                        if (match.goal1 > match.goal2) {
                            playerStatsTemplate.wins += 1;
                        }
                        else if (match.goal1 < match.goal2) {
                            playerStatsTemplate.losses += 1;
                        }
                        else if (match.goal1 === match.goal2) {
                            playerStatsTemplate.draws += 1;
                        }
                    }


                    if (match.player2 === playerStatsTemplate.name) {
                        playerStatsTemplate.goalsScored += +match.goal2;
                        playerStatsTemplate.goalsConceded += +match.goal1;
                        if (match.goal2 > match.goal1) {
                            playerStatsTemplate.wins += 1;
                        }
                        else if (match.goal2 < match.goal1) {
                            playerStatsTemplate.losses += 1;
                        }
                        else if (match.goal1 === match.goal2) {
                            playerStatsTemplate.draws += 1;
                        }
                    }
                }
            }
        }
        setPlayersStats(playersStatsTemplate);
        console.log(playersStatsTemplate);
    }

    return (
        <>
            <EditPlayersButton
                setIsEditEnabled={setIsEditEnabled}
            />
            <div className="matches">
                {matches && matches.map(match =>
                    <Match key={match.id} id={match.id} match={match} matches={matches} setMatches={setMatches} />
                )}
            </div>
            <ResetButton setIsGameStarted={setIsGameStarted} />
            <ResultsTable playerStatsTemplate={playerStatsTemplate} />
        </>
    )
}

export default Matches;