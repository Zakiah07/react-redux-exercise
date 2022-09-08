import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import A from "../components/A";

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
const Home = () => {
  const reduxActiveTheme = useSelector((state) => state.theme.activeTheme);

  return (
    <div>
      {" "}
      <p>You are currently viewing {reduxActiveTheme} theme</p>
      <ToggleButton onClick={() => {}}>Press Me!</ToggleButton>
      <A />
      <hr />
      <div style={{ display: "flex", gap: "10px" }}>
        <PrimaryButton>Primary Button</PrimaryButton>
        <DefaultButton>Default Button</DefaultButton>
      </div>
      <br />
    </div>
  );
};

export default Home;
