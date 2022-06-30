import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #444;
        font-size: 1rem;

        button, input, select, textarea {
            font-family: inherit;
        }
    }
`;

