import React, {useState} from "react";
import "./style.css"

const ResultsTable = (playerStatsTemplate) => {



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

                </tbody>
            </table>

        </div>
    );
};
export default ResultsTable;