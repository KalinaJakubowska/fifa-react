import React from "react";
import "./style.css"

const ResetButton = ({ setIsGameStarted }) => {

    const onButtonClick = () => {
        setIsGameStarted(false);
    }

    return (
        <button
            onClick={onButtonClick}
            className="buttons__button"
        >
            Zresetuj turniej!
        </button>
    );
}

export default ResetButton;