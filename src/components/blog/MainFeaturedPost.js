import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import NoticiasBackImage from "../../assets/img/oldbg/puentesbg2.jpg";

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

const MainFeaturedPost = (props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(${NoticiasBackImage})`,
      }}
    >
      <img
        /* src={props.article.featimage} */
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
              {title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
            >
              Noticias actuales e interesantes de nuestro
              proyecto
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
