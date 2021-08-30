import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
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

/* GRAPHQL QUERIES */

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        title
        excerpt
        published_at
        slug
        featimage {
          url
        }
        categories {
          id
          name
        }
      }
    }
  }
`;

const mainFeaturedPost = {
  title: "Main Featured Post Goes Here",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading",
};

const Category = () => {
  const { id } = useParams();
  const classes = useStyles();
  /* query data */
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });
  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <p>Error :(</p>;
  //console.log(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Noticias" />
        <main>
          <MainFeaturedPost
            post={mainFeaturedPost}
            title={`Noticias de ${data.category.name}`}
          />
          <Grid container spacing={4}>
            {data.category.articles.map((article) => {
              return (
                <FeaturedPost
                  key={article.id}
                  article={article}
                />
              );
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

export default Category;
