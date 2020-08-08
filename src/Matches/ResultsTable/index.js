import React, { useEffect, useState } from "react";
import "./style.css"

const ResultsTable = ({ playersStats }) => {
    const [results, setResults] = useState();

    useEffect(() => {
        generateTable();
    }, [playersStats]);

    const generateTable = () => {
        if (playersStats) {
            let a=0;
            const playersStatsDisplayContent = playersStats.map(playerStats => (
                <tr className="resultsTable__row" key={playerStats.name}>
                    <td className="resultsTable__rowItem">{++a}</td>
                    <td className="resultsTable__rowItem">{playerStats.name}</td>
                    <td className="resultsTable__rowItem">{playerStats.matches}</td>
                    <td className="resultsTable__rowItem">{playerStats.wins}</td>
                    <td className="resultsTable__rowItem">{playerStats.draws}</td>
                    <td className="resultsTable__rowItem">{playerStats.losses}</td>
                    <td className="resultsTable__rowItem">{playerStats.goalsScored} : {playerStats.goalsConceded}</td>
                    <td className="resultsTable__rowItem">{playerStats.goalsScored - playerStats.goalsConceded}</td>
                    <td className="resultsTable__rowItem resultsTable__rowItem--points">{playerStats.points}</td>
                </tr>
            ));
            setResults(playersStatsDisplayContent);
        }
    };

    return (
        <div className="resultsTable__container">
            <table className="resultsTable__table">
                <caption className="resultsTable__caption"><b>Tabela wyników</b></caption>
                <thead>
                    <tr className="resultsTable__headRow">
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">Lp</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">Gracz</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">M</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">W</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">R</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">P</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">B</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">B +/-</th>
                        <th className="resultsTable__rowItem resultsTable__rowItem--headItem">P</th>
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