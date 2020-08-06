import React, { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import EditPlayersButton from "./EditPlayersButton";
import Match from "./Match";
import ResultsTable from "./ResultsTable";
import "./style.css";

const Matches = ({ matches, setMatches, players, playersStats, setPlayersStats, setIsGameStarted, setIsEditEnabled }) => {
    const [selectedMatch, setSelectedMatch] = useState(0);

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
                    points: 0,
                    matches: 0,
                },
            ];
        }

        for (const match of matches) {
            if (match.goal1 && match.goal2) {
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
                        playerStatsTemplate.points =
                            playerStatsTemplate.wins * 3 + playerStatsTemplate.draws;
                        playerStatsTemplate.matches =
                            playerStatsTemplate.wins + playerStatsTemplate.draws + playerStatsTemplate.losses;
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
                        playerStatsTemplate.points = playerStatsTemplate.wins * 3 + playerStatsTemplate.draws;
                        playerStatsTemplate.matches = playerStatsTemplate.wins + playerStatsTemplate.draws + playerStatsTemplate.losses;
                    }
                }
            }
        }
        setPlayersStats(playersStatsTemplate.sort(
            (a, b) => a.points !== b.points
                ? a.points - b.points
                : ((a.goalsScored - a.goalsConceded) !== (b.goalsScored - b.goalsConceded)
                    ? (a.goalsScored - a.goalsConceded) - (b.goalsScored - b.goalsConceded)
                    : a.goalsScored - b.goalsScored)
        ).reverse());
    }

    return (
        <>
            <EditPlayersButton
                setIsEditEnabled={setIsEditEnabled}
            />
            <div className="matches">
                {matches && matches.map(match =>
                    <Match
                        key={match.id}
                        selectedMatch={selectedMatch}
                        setSelectedMatch={setSelectedMatch}
                        id={match.id} match={match}
                        matches={matches}
                        setMatches={setMatches}
                    />
                )}
            </div>
            <ResetButton setIsGameStarted={setIsGameStarted} />
            <ResultsTable playersStats={playersStats} />
        </>
    )
}

export default Matches;