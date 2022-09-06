import React from "react";
import styled from "styled-components";
import B from "./B";

const Container = styled.div`
  padding: 10px;
  border: 1px solid gray;
`;

const A = ({ activeTheme, setActiveTheme }) => {
  return (
    <Container>
      <p>Component A</p>
      <B activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
    </Container>
  );
};

export default A;
