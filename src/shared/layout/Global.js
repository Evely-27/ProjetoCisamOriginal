import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        width: 100vh;
        height: 100vh;
        background-color: aliceblue;
        font-family: 'Roboto Slab';
    }
`