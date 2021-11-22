import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
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
    links: {
      color: "#004d40",
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
  const { description, social, title } = props;
  const { loading, error, data } = useQuery(FEATNEWS);

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <p>Error :(</p>;
  console.log(data);

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
        Otras Noticias
      </Typography>
      <List
        component="nav"
        aria-label="secondary mailbox folders"
      >
        {data.articles.map((article) => {
          return (
            <Link
              display="block"
              variant="body1"
              to={`/noticia/${article.id}`}
              key={article.id}
            >
              <ListItem
                button
                style={{ padding: "11px 22px 5px" }}
              >
                <ListItemText
                  primary={article.title}
                  className={classes.links}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
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
              <Grid item className={classes.links}>
                <network.icon />
              </Grid>
              <Grid item className={classes.links}>
                {network.name}
              </Grid>
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
