import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    button {
        border: none;
        border-radius: 15px;
    }
    
`;