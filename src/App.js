import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fullpage from "./pages/Fullpage";
import Proyecto from "./pages/Proyecto";
import Modelo from "./pages/Modelo";
import Historias from "./pages/Historias";
import Noticias from "./pages/Noticias";
import NoticiasSingle from "./pages/NoticiasSingle";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { green, indigo, pink, cyan, teal } from "@material-ui/core/colors";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: green,
    info: cyan,
    warning: pink,
    success: teal,
  },
  typography: {
    fontFamily: ["Tajawal", "Roboto", "Helvetica"],
    fontWeightBold: 500,
    button: {
      lineHeight: 1.75,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Fullpage />
            </Route>
            <Route path="/proyecto">
              <Proyecto />
            </Route>
            <Route path="/modelo">
              <Modelo />
            </Route>
            <Route path="/historias">
              <Historias />
            </Route>
            <Route path="/noticias">
              <Noticias />
            </Route>
            <Route path="/noticias-single">
              <NoticiasSingle />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
