import React, { useState, useRef } from "react";
import { Button } from "./../../styledButtons.js";
import { Input } from "./../../styledInput";
import { Form } from "./styled.js";

const SettingsForm = ({ addNewPlayer }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim().length > 0) {
            addNewPlayer(newTaskContent.trim());
            setNewTaskContent("");
            inputRef.current.focus();
        }
    }

    return (
        <Form className="settingsForm" onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                autoFocus
                placeholder="Podaj nazwę gracza"
                onChange={({ target }) => setNewTaskContent(target.value)}
                maxLength="20"
            />
            <Button>Dodaj nowego gracza</Button>
        </Form>
    );
};

export default SettingsForm;