import React from "react";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { pinkTheme, grayTheme } from "./theme";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoForm from "./page/TodoForm";
import Home from "./page/Home";

function App() {
  const reduxActiveTheme = useSelector((state) => state.theme.activeTheme);

  return (
    <>
      <ThemeProvider
        theme={reduxActiveTheme === "pink" ? pinkTheme : grayTheme}
      >
        <GlobalStyle />
        <Router>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/todos">Todo List</Link>
            <Link to="/">Home</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoForm />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
