import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: ${(props) => props.theme.font.openSans};
        font-size: 10px;
        color: ${(props) => props.theme.color.black};
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.black};
    }

    span {
        display: inline-block;
    }

    input {
        border: transparent;
        
        &:focus {
            outline: none;
        }
    }

    button {
        border: transparent;
        cursor: pointer;
    }
`;
