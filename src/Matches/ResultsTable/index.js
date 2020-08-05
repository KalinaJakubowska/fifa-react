import React, { useEffect, useState } from "react";
import "./style.css"

const ResultsTable = ({ playersStats }) => {
    const [results, setResults] = useState();

    useEffect(() => {
        generateTable();
    }, [playersStats]);

    const generateTable = () => {
        //  = playersStats.sort(((a, b) => a.points - b.points));
        if (playersStats) {
            console.log(playersStats);
            let sortedPlayersStats = playersStats.map(playerStats => (
                <tr key={playersStats.name}>
                    <td>{0}</td>
                    <td>{playerStats.name}</td>
                    <td>{playerStats.matches}</td>
                    <td>{playerStats.wins}</td>
                    <td>{playerStats.draws}</td>
                    <td>{playerStats.losses}</td>
                    <td>{playerStats.goalsScored} : {playerStats.goalsConceded}</td>
                    <td>{playerStats.goalsScored - playerStats.goalsConceded}</td>
                    <td>{playerStats.points}</td>
                </tr>
            ));
            setResults(sortedPlayersStats);
        }
    };

    return (
        <div>
            <table>
                <caption><b>Tabela wyników</b></caption>
                <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Gracz</th>
                        <th>M</th>
                        <th>W</th>
                        <th>R</th>
                        <th>P</th>
                        <th>B</th>
                        <th>B +/-</th>
                        <th>P</th>
                    </tr>
                </thead>
                <tbody>
                    {results}
                </tbody>
            </table>

        </div>
    );
};
export default ResultsTable;