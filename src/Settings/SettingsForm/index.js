import React, { useState } from "react";
import { Button } from "./../../styledButtons.js";
import { Input } from "./../../styledInput";
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
            <Input
                value={newTaskContent}
                autoFocus
                placeholder="Podaj nazwę gracza"
                onChange={({ target }) => setNewTaskContent(target.value)}
                maxLength="20"
            />
            <Button>Dodaj nowego gracza</Button>
        </form>
    );
};

export default SettingsForm;