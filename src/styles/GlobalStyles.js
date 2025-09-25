import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after { box-sizing: border-box; }
  html,body,#root { height: 100%; }
  body {
    margin:0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height:1.45;
  }
  a { color: inherit; text-decoration: none; }
  img { display:block; max-width:100%; height:auto; }
  button { font-family: inherit; cursor: pointer; }
`;

export default GlobalStyle;
