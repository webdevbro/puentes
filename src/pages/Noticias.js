import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "../hooks/useFetch";
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

const Noticias = () => {
  const classes = useStyles();
  const url = "http://localhost:1337/articles";
  const { loading, error, data } = useFetch(url);
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
        <Header title="Noticias" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {data.map((article) => {
              return <FeaturedPost key={article.id} article={article} />;
            })}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Puentes"
        description='"mejores oportunidades laborales para los jóvenes, mayor empoderamiento económico de las comunidades vulnerables"'
      ></Footer>
    </React.Fragment>
  );
};

export default Noticias;
