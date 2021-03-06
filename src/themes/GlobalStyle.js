import { createGlobalStyle } from "styled-components";

import resetCSS from "./resetCSS";

const GlobalStyle = createGlobalStyle`
    ${resetCSS}

    body {
        font-family: 'Raleway', sans-serif;
        background-color: #8C11BE;
    }

    .root {
        height: 100vh;
        padding: 25px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: white;
        font-size: 32px;
        margin-bottom: 10px;
    }

    h2 {
        color: white;
        font-size: 26px;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
    }

    h3 {
        color: white;
        font-size: 26px;
        font-weight: 700;
    }

    ion-icon {
        font-size: 24px;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 326px;
        box-sizing: border-box;
        margin-top: 20px;
        margin-bottom: 32px;
    }

    form input {
        width: 100%;
        height: 58px;
        box-sizing: border-box;
        color: black;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        margin-bottom: 13px;
        padding: 15px;
    }

    form button {
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: white;
        font-weight: 700;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }

    form input::placeholder {
        opacity: 1;
        color: black;
    }

    a {
        color: white;
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;