import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => {
  return {
    paraStyles: {
      "& p": {
        marginBottom: "1rem",
        "& img": {
          maxWidth: "100%",
        },
      },
    },
  };
});

export default function Main(props) {
  const { article } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="h6" gutterBottom></Typography>
      <Divider />
      <Typography
        component="div"
        className={classes.paraStyles}
        style={{ marginTop: "2rem", textAlign: "justify" }}
      >
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </Typography>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
