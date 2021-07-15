import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fullpage from "./pages/Fullpage";
import Proyecto from "./pages/Proyecto";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple, indigo, pink, cyan, teal } from "@material-ui/core/colors";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: deepPurple,
    info: cyan,
    warning: pink,
    success: teal,
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"],
    fontWeightBold: 500,
  },
});
const accent = teal["A400"];

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Fullpage />
          </Route>
          <Route path="/proyecto">
            <Proyecto />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
