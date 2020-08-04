import React, { useEffect } from "react";
import "./style.css";

const Matches = ({ matches, players, setPlayersStats }) => {

    useEffect(() => {
        addStats();
    }, [matches]);

    const addStats = () => {
        let playersStatsTemplate = [];

        for (const player of players) {
            console.log(player);
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
                },
            ]
        }

        for (const match of matches) {
            console.log(match);
            for (const playerStatsTemplate of playersStatsTemplate) {
                if (match.player1 === playerStatsTemplate.name) {
                    playerStatsTemplate.goalsScored += match.goal1;
                    playerStatsTemplate.goalsConceded += match.goal2;
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
                    playerStatsTemplate.goalsScored += match.goal2;
                    playerStatsTemplate.goalsConceded += match.goal1;
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
        setPlayersStats(playersStatsTemplate);
    }

    return (
        <div className="matches">
            {matches && matches.map(({ id, player1, player2, goal1, goal2 }) =>
                (<div key={id} className="match">
                    <div className="match__item match__item--player">{player1}</div>
                    <div className="match__item match__item--goal">{goal1}</div>
                    <div className="match__item match__item--vs">VS</div>
                    <div className="match__item match__item--goal">{goal2}</div>
                    <div className="match__item match__item--player">{player2}</div>
                </div>)
            )}
        </div>
    )
}

export default Matches;