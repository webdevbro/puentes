import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    mainFeaturedPost: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      /* backgroundImage: "url(https://source.unsplash.com/random)", */
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "380px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    mainFeaturedPostContent: {
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  };
});

const SingleFeaturedPost = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(${data.featimage.url})`,
      }}
    >
      <img
        src={data.featimage.url}
        alt="test"
        style={{ display: "none" }}
      />
      <div className={classes.overlay}></div>
      <Grid container>
        <Grid item md={7}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
            >
              {data.excerpt}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleFeaturedPost;

SingleFeaturedPost.propTypes = {
  post: PropTypes.object,
};
