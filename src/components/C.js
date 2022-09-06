import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../themeSlice";

const Container = styled.div`
  padding: 10px;
  border: 1px solid gray;
`;

const C = () => {
  const reduxActiveTheme = useSelector((state) => state.theme.activeTheme);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (reduxActiveTheme === "pink") {
      dispatch(toggleTheme("gray"));
    } else {
      dispatch(toggleTheme("pink"));
    }
  };

  return (
    <Container>
      <button onClick={handleOnClick}>Toggle Theme With Dispatch</button>
    </Container>
  );
};

export default C;
