import React from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { pinkTheme, grayTheme } from "./theme";
import { useSelector } from "react-redux";
import A from "./components/A";

const PrimaryButton = styled.button`
  width: 50%;
  height: 50px;
  cursor: pointer;
  transition: all 200ms ease;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryVariant};

  :hover {
    background: ${(props) => props.theme.colors.primaryVariant};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const DefaultButton = styled.button`
  width: 50%;
  height: 50px;
  cursor: pointer;
  transition: all 200ms ease;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryVariant};

  :hover {
    background: ${(props) => props.theme.colors.secondaryVariant};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const ToggleButton = styled.button`
  width: 50%;
  height: 50px;
  cursor: pointer;
  transition: all 200ms ease;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 10px;
`;

function App() {
  const reduxActiveTheme = useSelector((state) => state.theme.activeTheme);
  console.log({ reduxActiveTheme });

  return (
    <>
      <ThemeProvider
        theme={reduxActiveTheme === "pink" ? pinkTheme : grayTheme}
      >
        <GlobalStyle />
        <p>You are currently viewing {reduxActiveTheme} theme</p>

        <ToggleButton onClick={() => {}}>Press Me!</ToggleButton>
        <A />
        <hr />
        <div style={{ display: "flex", gap: "10px" }}>
          <PrimaryButton>Primary Button</PrimaryButton>
          <DefaultButton>Default Button</DefaultButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
