import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./style/theme";
import Main from "./components/Main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
