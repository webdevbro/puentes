import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const styles = (theme) => {
  return {
    listItem: {
      marginTop: theme.spacing(1),
    },
  };
};

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

const Markdown = (props) => {
  return <ReactMarkdown options={options} {...props} />;
};

export default Markdown;
