import styled from "styled-components";

export const Input = styled.input`
    padding: 10px;
    height: 45px;
    background-color: hsl(239, 94%, 25%);
    border: 2px solid hsla(239, 94%, 9%, 0.8);
    color: #fff;

    &::placeholder {
    color: #ccc;
}`

export const MatchInput = styled(Input)`
    display: block;
    margin: 0 auto;
    max-width: 53px;
    height: 30px;
    font-size: 15px;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    @media(max-width: 550px) {
        max-width: 42px;
    }
`



