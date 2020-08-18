import styled from "styled-components";

export const Button = styled.button`
    display: block;
    color: #fff;
    background-color: hsl(201, 100%, 36%);
    padding: 10px;
    border: 2px solid hsl(239, 94%, 9%);
    border-radius: 4px;
    transition: 0.3s;
    height: 45px;

    &:hover {
    background-color: hsl(201, 100%, 43%);
    }
    &:active {
    background-color: hsl(201, 100%, 50%);
    }
    &:disabled {
    color: #ccc;
    transform: none;
    background-color: hsl(201, 30%, 36%);
    }
`
export const CenteredButton = styled(Button)`
    margin: 0 auto;
`


