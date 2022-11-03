import React from "react";
import { createRoot } from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

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
