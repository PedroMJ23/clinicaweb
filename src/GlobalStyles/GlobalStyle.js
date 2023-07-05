import { createGlobalStyle } from "styled-components";

const GlobalStylesCss = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    list-style: none;
    list-style-type: none;
}
h1{
    font-size: 40px;
}
h2{
    font-size: 30px;
}

`;

export default GlobalStylesCss;
