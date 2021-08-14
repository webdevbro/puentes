import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function Main(props) {
  const { article } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="h6" gutterBottom></Typography>
      <Divider />
      <Typography paragraph style={{ marginTop: "2rem", textAlign: "justify" }}>
        {article.body}
      </Typography>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
