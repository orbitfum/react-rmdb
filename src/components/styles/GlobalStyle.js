import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Abel', sans-serif;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;