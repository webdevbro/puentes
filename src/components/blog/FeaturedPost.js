import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
} from "@material-ui/core";
import "./FeaturedPost.css";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flex: 1,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    /* width: 180, */
    minWidth: "190px",
    minHeight: "240",
  },
});

const FeaturedPost = (props) => {
  const classes = useStyles();
  const { article } = props;

  return (
    <Grid item xs={12} md={6}>
      <Link to={`/noticia/${article.id}`}>
        <CardActionArea className="card-action-area">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {article.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {article.published_at}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {article.excerpt}
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={article.featimage.url}
                title={article.title}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
};

export default FeaturedPost;

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
