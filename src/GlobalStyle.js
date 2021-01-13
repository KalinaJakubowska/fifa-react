import { createGlobalStyle } from "styled-components";
import backgroundImage from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    background-color: rgb(1, 9, 114);
    background-image: url(${backgroundImage});
    background-position: fixed;
    background-size: cover;
    font-family: 'lato', sans-serif;
    color: #CAF0F8;

    @media (max-width: 767px) {
      padding: 10px;
    }
  }
`;
