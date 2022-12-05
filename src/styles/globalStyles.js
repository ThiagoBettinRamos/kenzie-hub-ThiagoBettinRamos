import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *   {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    :root{
        --color-1            : #FF577F;
        --color-2            : #FF427F;
        --color-3            : #59323F;
        --color-grey-0   : #F8F9FA;
        --color-grey-1   : #868E96;
        --color-grey-2   : #343B41;
        --color-grey-3   : #212529;
        --color-grey-4   : #121214;
        --color-green    : #3FE864;
        --color-negativ : #E83F5B;
    }

    ul{
        list-style: none;
    }
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    body{
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: var(--color-grey-4 );
}
`