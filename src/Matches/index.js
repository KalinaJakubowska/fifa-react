import React, { useState, useEffect } from "react";
import Match from "./Match";
import ResultsTable from "./ResultsTable";
import { Button } from "./../styledButtons.js";
import "./style.css";

const Matches = ({ matches,
    setMatches,
    players,
    playersStats,
    setPlayersStats,
    setIsGameStarted,
    // setIsEditEnabled 
}) => {
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
            const { goal1, goal2, player1, player2 } = match;
            if (goal1!=="" && goal2!=="") {
                for (const playerStatsTemplate of playersStatsTemplate) {
                    if (player1 === playerStatsTemplate.name) {
                        playerStatsTemplate.goalsScored += goal1;
                        playerStatsTemplate.goalsConceded += goal2;
                        if (goal1 > goal2) {
                            playerStatsTemplate.wins += 1;
                        }
                        else if (goal1 < goal2) {
                            playerStatsTemplate.losses += 1;
                        }
                        else if (goal1 === goal2) {
                            playerStatsTemplate.draws += 1;
                        }
                        playerStatsTemplate.points =
                            playerStatsTemplate.wins * 3 + playerStatsTemplate.draws;
                        playerStatsTemplate.matches =
                            playerStatsTemplate.wins + playerStatsTemplate.draws + playerStatsTemplate.losses;
                    }

                    if (player2 === playerStatsTemplate.name) {
                        playerStatsTemplate.goalsScored += goal2;
                        playerStatsTemplate.goalsConceded += goal1;
                        if (goal2 > goal1) {
                            playerStatsTemplate.wins += 1;
                        }
                        else if (goal2 < goal1) {
                            playerStatsTemplate.losses += 1;
                        }
                        else if (goal1 === goal2) {
                            playerStatsTemplate.draws += 1;
                        }
                        playerStatsTemplate.points =
                            playerStatsTemplate.wins * 3 + playerStatsTemplate.draws;
                        playerStatsTemplate.matches =
                            playerStatsTemplate.wins + playerStatsTemplate.draws + playerStatsTemplate.losses;
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

    // const onEditButtonClick = () => {
    //     setIsEditEnabled(true);
    // }

    const onResetButtonClick = () => {
        setIsGameStarted(false);
    }

    return (
        <>
            <div className="matches__container matches__container--buttons">
                {/* <Button
                    onClick={onEditButtonClick}
                >
                    Edytuj graczy bez resetu
                </Button> */}
                <Button
                    onClick={onResetButtonClick}
                >
                    Zresetuj turniej!
                </Button>
            </div>
            <div className="matches__container">
                <div className="matches__box">
                    <div className="matches__matchesList">
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
                </div>
                <div className="matches__box">
                    <ResultsTable playersStats={playersStats} />
                </div>
            </div>
        </>
    )
}

export default Matches;