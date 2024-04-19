import { createGlobalStyle } from "styled-components"

const bg_color = "#6c63ff"

export const GlobalStyle = createGlobalStyle`
${"" /* RESET */}
html,
  body,
  span,
  p,
  form,
  img,
  a,
  ul,
  ol,
  li,
  table,
  tr,
  td,
  div {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style-type: none;
  }
  ${"" /* Estilos globais */}
    body {
        font-family: "Inter", sans-serif;
        background-color: ${bg_color};
    }
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.3)
  }  
`
