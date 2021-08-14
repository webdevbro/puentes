import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, Container } from "@material-ui/core";
import Header from "../components/blog/Header";
import Main from "../components/blog/Main";
import MainFeaturedPost from "../components/blog/MainFeaturedPost";
import Sidebar from "../components/blog/Sidebar";
import Footer from "../components/blog/Footer";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import post1 from "../components/blog/post1";
import post2 from "../components/blog/post2";
import post3 from "../components/blog/post3";

const useStyles = makeStyles((theme) => {
  return {
    mainGrid: {
      marginTop: theme.spacing(3),
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
const posts = [post1, post2, post3];
const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
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

const NoticiasSingle = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Noticias" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
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
        description='"mejores oportunidades laborales para los jóvenes, mayor empoderamiento económico de las comunidades vulnerables"'
      ></Footer>
    </React.Fragment>
  );
};

export default NoticiasSingle;
