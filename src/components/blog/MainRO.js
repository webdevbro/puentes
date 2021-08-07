import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import Markdown from "./Markdown";

const useStyles = makeStyles((theme) => {
  return {
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  };
});

const Main = (props) => {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => {
        return (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        );
      })}
    </Grid>
  );
};

export default Main;

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
