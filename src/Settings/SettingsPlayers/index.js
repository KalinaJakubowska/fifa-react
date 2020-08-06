import React from "react";
import "./style.css"

const SettingsPlayers = ({ players, removePlayer }) => {
    if (!players.length) {
        return null;
    }

    return (
        < ul className="settingsPlayers" >
            {
                players.map(({ name }) => (
                    <li key={name} className="settingsPlayers__item">
                        <span className="settingsPlayers__task">
                            {name}
                        </span>
                        <button className="settingsPlayers__button" onClick={() => removePlayer(name)} />
                    </li>
                ))
            }
        </ul >
    )
};

export default SettingsPlayers;