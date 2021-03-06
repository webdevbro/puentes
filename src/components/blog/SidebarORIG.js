import React from "react";
import PropTypes from "prop-types";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
  };
});

/* GRAPHQL QUERY */
const FEATNEWS = gql`
  query getFeatNews {
    articles {
      id
      title
      excerpt
      published_at
      featimage {
        url
      }
    }
  }
`;

const Sidebar = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        className={classes.sidebarAboutBox}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography
        variant="h6"
        gutterBottom
        className={classes.sidebarSection}
      >
        Archivos
      </Typography>
      {archives.map((archive) => {
        return (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.id}
          >
            {archive.title}
          </Link>
        );
      })}
      <Typography
        variant="h6"
        gutterBottom
        className={classes.sidebarSection}
      >
        Social
      </Typography>
      {social.map((network) => {
        return (
          <Link
            display="block"
            variant="body1"
            href="#"
            key={network.id}
          >
            <Grid
              container
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        );
      })}
    </Grid>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
