import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 50%;
    padding: 10px;
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
