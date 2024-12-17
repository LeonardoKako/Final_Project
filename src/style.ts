import { createGlobalStyle } from "styled-components";

export const cores = {
  branco: "#fff",
  fundo: "#fffcf4",
  vermelho: "#E66767",
  laranja: "#FFEBD9",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    li {
      list-style: none;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.vermelho};
  }
`;
