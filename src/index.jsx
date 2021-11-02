import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./muiTheme";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
