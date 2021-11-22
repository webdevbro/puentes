import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Grid,
  Container,
  Typography,
  CircularProgress,
  Paper,
} from "@material-ui/core";
import Header from "../components/blog/Header";
import Main from "../components/blog/Main";
import SingleFeaturedPost from "../components/blog/SingleFeaturedPost";
import Sidebar from "../components/blog/Sidebar";
import Footer from "../components/blog/Footer";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
/* import "./NoticiasSingle.css"; */

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "6rem",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  };
});

const sidebar = {
  title: "Puentes",
  description:
    "El proyecto busca minimizar la brecha histórica y al mismo tiempo permitir mejoras en la calidad de vida de hombres y mujeres campesinas, apoyando el emprendimiento y el rol de los jóvenes como dinamizadores de las cadenas de valor agroalimentarias tanto en origen como en destino, creando mejores y más formas de producción más eficientes, fomentando el consumo saludable y la sensibilización, y aprovechando las potencialidades del agroturismo.",
  archives: [
    { id: 1, title: "March 2020", url: "#" },
    { id: 2, title: "February 2020", url: "#" },
    { id: 3, title: "January 2020", url: "#" },
    { id: 4, title: "November 1999", url: "#" },
    { id: 5, title: "October 1999", url: "#" },
    { id: 6, title: "September 1999", url: "#" },
    { id: 7, title: "August 1999", url: "#" },
    { id: 8, title: "July 1999", url: "#" },
    { id: 9, title: "June 1999", url: "#" },
    { id: 10, title: "May 1999", url: "#" },
    { id: 11, title: "April 1999", url: "#" },
  ],
  social: [
    { id: 1, name: "Facebook", icon: FacebookIcon },
    { id: 2, name: "Twitter", icon: TwitterIcon },
    { id: 3, name: "Instagram", icon: InstagramIcon },
  ],
};

/* GRAPHQL QUERY */

const ARTICLE = gql`
  query getArticle($slug: String!) {
    article(slug: $slug) {
      slug
      id
      title
      body
      featimage {
        url
      }
    }
  }
`;

const NoticiasSingle = () => {
  const classes = useStyles();
  const { slug } = useParams();
  console.log(slug);
  const { loading, error, data } = useQuery(ARTICLE, {
    variables: {
      slug: slug,
    },
  });

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <p>Error :(</p>;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Noticias Single" />
        <main>
          <SingleFeaturedPost data={data.article} />
          <Grid
            container
            spacing={5}
            className={classes.mainGrid}>
            <Main article={data.article} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Puentes"
        description="Conectando Oportunidades para Jóvenes"></Footer>
    </React.Fragment>
  );
};

export default NoticiasSingle;
