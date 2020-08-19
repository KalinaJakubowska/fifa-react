import styled from "styled-components";

export const SettingsContainer = styled.div`
    min-height: 100px;
    background-color: #03045E;
    max-width: 1000px;
    margin: 10px auto;
    box-shadow: 0 0 5px 2px hsl(239, 94%, 11%);
    padding-bottom: 20px;
`

export const HeaderContainer = styled.div`
    border-bottom: 2px solid hsla(239, 94%, 9%, 0.8);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
}`
export const SettingsHeader = styled.h2`
    font-weight: 700;
    font-size: 40px;
    margin: 0;
    padding: 20px;
    text-align: center;
`