import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from "@apollo/client";
import {
  CssBaseline,
  Grid,
  Container,
  CircularProgress,
} from "@material-ui/core";
import Header from "../components/blog/Header";
import MainFeaturedPost from "../components/blog/MainFeaturedPost";
import FeaturedPost from "../components/blog/FeaturedPost";
import Footer from "../components/blog/Footer";

import "./Noticias.css";

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
    contentCont: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh !important",
    },
    mainContent: {
      flex: "auto",
    },
  };
});

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];
const mainFeaturedPost = {
  title: "Main Featured Post Goes Here",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading",
};

/* GRAPHQL QUERY */
const ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      excerpt
      published_at
      createdDate
      slug
      featimage {
        url
      }
    }
  }
`;

const Noticias = () => {
  const classes = useStyles();
  /* query data */
  const { loading, error, data } = useQuery(ARTICLES);

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
      <Container
        maxWidth="lg"
        className={classes.contentCont}>
        <Header title="Noticias" sections={sections} />
        <main className={classes.mainContent}>
          <MainFeaturedPost
            post={mainFeaturedPost}
            title="Blog de Noticias"
          />
          <Grid container spacing={4}>
            {data.articles.map((article) => {
              return (
                <FeaturedPost
                  key={article.id}
                  article={article}
                />
              );
            })}
          </Grid>
        </main>
        <Footer
          title="Puentes"
          description="Conectando Oportunidades para Jóvenes"></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Noticias;
