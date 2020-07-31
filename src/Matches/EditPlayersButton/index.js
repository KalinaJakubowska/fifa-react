import React from "react";
import "./style.css"

const EditPlayersButton = ({ setIsEditEnabled }) => {
    const onButtonClick = () => {
        setIsEditEnabled(true);
    }

    return (
        <button
            onClick={onButtonClick}
            className="buttons__button"
        >
            Edytuj graczy bez resetu
        </button>
    );
}

export default EditPlayersButton;