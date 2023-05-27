import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Helvetica', 'Roboto', sans-serif;
    }

    main {
        margin: 50px 0;
    }
    h1, h2, h3, h4, p {
        padding: 0;
        margin: 0;
    }

    body {
        max-width: 1240px;
        margin: auto;
    } 
`;
