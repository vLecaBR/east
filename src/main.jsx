import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0B5FFF",     // azul mecânica
    accent: "#FFB100",      // amarelo
    bg: "#F7F8FB",
    card: "#FFFFFF",
    text: "#1E1E1E",
  },
  breakpoints: {
    sm: "600px",
    md: "900px",
  },
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
