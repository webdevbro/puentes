import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  CircularProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logoPuentes from "../../assets/img/puentes-logo-solo.png";
const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      position: "relative",
    },
    toolbarTitle: {
      flex: 1,
      marginTop: "0.5rem",
      padding: "1.2rem 0px",
    },
    toolbarTitleLink: {
      textTransform: "uppercase",
      fontSize: "2rem",
      fontWeight: 600,
      color: "rgba(0, 0, 0, 0.87)",
    },
    toolbarSecondary: {
      justifyContent: "space-around",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    logoLink: {
      width: "50px",
      position: "absolute",
      top: "20px",
      left: "10px",
    },
  };
});

/* GRAPHQL QUERY */
const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

const Header = (props) => {
  const classes = useStyles();
  const { title } = props;

  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <p>Error :(</p>;
  //console.log(data);

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <div className="classes.logoLinkCont">
          <Link to="/">
            <img
              className={classes.logoLink}
              src={logoPuentes}
              alt="Logo Puentes"
            />
          </Link>
        </div>
        <Typography
          component="h1"
          variant="h4"
          color="textPrimary"
          style={{
            fontWeight: "600",
            textTransform: "uppercase",
          }}
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            to="/noticias"
            className={classes.toolbarTitleLink}
          >
            {title}
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {data.categories.map((category) => {
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
            >
              <Button
                key={category.id}
                color="default"
                style={{ padding: "11px 22px 5px" }}
              >
                {category.name}
              </Button>
            </Link>
          );
        })}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
