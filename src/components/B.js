import React from "react";
import styled from "styled-components";
import C from "./C";

const Container = styled.div`
  padding: 10px;
  border: 1px solid gray;
`;

const B = ({ activeTheme, setActiveTheme }) => {
  return (
    <Container>
      <p>Component B</p>
      <C activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
    </Container>
  );
};

export default B;
