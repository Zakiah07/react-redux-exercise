import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border: 1px solid gray;
`;

const C = ({ activeTheme, setActiveTheme }) => {
  const changeTheme = () => {
    if (activeTheme === "pink") {
      setActiveTheme("gray");
    } else {
      setActiveTheme("pink");
    }
  };

  return (
    <Container>
      <button onClick={changeTheme}>Toggle Theme</button>
    </Container>
  );
};

export default C;
