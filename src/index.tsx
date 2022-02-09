import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navigation from "./navigation";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="playtomic-challenge">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
