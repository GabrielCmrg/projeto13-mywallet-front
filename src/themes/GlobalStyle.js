import { createGlobalStyle } from "styled-components";

import resetCSS from "./resetCSS";

const GlobalStyle = createGlobalStyle`
    ${resetCSS}

    body {
        font-family: 'Raleway', sans-serif;
        background-color: #8C11BE;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: white;
        font-size: 32px;
    }
`;

export default GlobalStyle;