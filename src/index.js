import React from "react";
import { createRoot } from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";

import App from "./App";

import "./index.css";

const root = createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: "Times",
  },
});
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </BrowserRouter>
);
