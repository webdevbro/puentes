import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
      marginTop: "0.5rem",
      color: "inherit",
    },
    toolbarTitleLink: {
      textTransform: "uppercase",
      fontSize: "2.125rem",
      color: "#000",
      fontWeight: 500,
    },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  };
});

const Header = (props) => {
  const classes = useStyles();
  const { title, sections } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/noticias" className={classes.toolbarTitleLink}>
            {title}
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => {
          return (
            <Typography
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Typography>
          );
        })}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
