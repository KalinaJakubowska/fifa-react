import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    grid-gap: 20px;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
}`