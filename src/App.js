import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Fullpage from "./pages/Fullpage";
import Proyecto from "./pages/Proyecto";
import Modelo from "./pages/Modelo";
import Contacto from "./pages/Contact";
import Historias from "./pages/Historias";
import Noticias from "./pages/Noticias";
import NotFound from "./pages/NotFound";
import NoticiasSingle from "./pages/NoticiasSingle";
import Category from "./pages/Category";
import Layout from "./components/Layout";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import {
  green,
  indigo,
  pink,
  cyan,
  teal,
} from "@material-ui/core/colors";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: indigo,
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

/* APOLLO CLIENT */
const client = new ApolloClient({
  /* uri: "http://localhost:1337/graphql", */
  uri: "https://puentesbackend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ApolloProvider client={client}>
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
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/historias">
                <Historias />
              </Route>
              <Route path="/noticias">
                <Noticias />
              </Route>
              <Route path="/noticia/:slug">
                <NoticiasSingle />
              </Route>
              <Route path="/category/:id">
                <Category />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ApolloProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
