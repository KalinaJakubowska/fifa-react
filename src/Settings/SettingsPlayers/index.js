import React, { useEffect } from "react";
import "./style.css"

const SettingsPlayers = ({ players, removePlayer }) => {
    useEffect(() => {
        localStorage.setItem("players", JSON.stringify(players));
    }, [players]);

    if (!players.length) {
        return null;
    }

    return (
        < ul className="settingsPlayers" >
            {
                players.map(({ name, id }) => (
                    <li key={id} className="settingsPlayers__item">
                        <span className="settingsPlayers__task">
                            {name}
                        </span>
                        <button className="settingsPlayers__button" onClick={() => removePlayer(id)} />
                    </li>
                ))
            }
        </ul >
    )
};

export default SettingsPlayers;