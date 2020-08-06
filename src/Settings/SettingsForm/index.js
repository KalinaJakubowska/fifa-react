import React, { useState } from "react";
import "./style.css"

const SettingsForm = ({ addNewPlayer }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim().length > 0) {
            addNewPlayer(newTaskContent.trim());
            setNewTaskContent("");
        }
    }

    return (
        <form className="settingsForm" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="settingsForm__input"
                autoFocus
                placeholder="Podaj nazwę gracza"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="settingsForm__button">Dodaj nowego gracza</button>
        </form>
    );
};

export default SettingsForm;