import React from "react";
/* import NavBar from "./NavBar"; */
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ArtTrackOutlinedIcon from "@material-ui/icons/ArtTrackOutlined";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { green } from "@material-ui/core/colors";

import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    logolink: {
      cursor: "pointer",
      textDecoration: "none",
      textTransform: "uppercase",
      color: theme.palette.grey[200],
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.grey[100],
      },
    },
    page: {
      width: "100%",
      /* padding: theme.spacing(3), */
    },
    appbar: {
      backgroundColor: green[500],
    },
    title: {
      padding: theme.spacing(2),
      fontSize: "1.4rem",
      fontWeight: "400",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    drawer: {
      flex: 1,
      width: 220,
    },
    active: {
      backgroundColor: "#F4F4F4",
    },
    toolbar: theme.mixins.toolbar,
    listicon: {
      color: green[600],
    },
    drawerMain: {
      zIndex: "3000",
    },
    drawerButton: {
      position: "absolute",
      top: "10px",
      right: "20px",
      zIndex: "80",
    },
    iconbutton: {
      color: green[600],
    },

    navright: {
      display: "flex",
      alignItems: "center",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer({ openDrawer, [anchor]: open });
  };
  const toggleDrawerWait = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setTimeout(() => {
      return setOpenDrawer({ openDrawer, [anchor]: open });
    }, 300);
  };

  const menuItems = [
    {
      text: "Inicio",
      icon: <BookOutlinedIcon />,
      path: "/",
    },
    {
      text: "El Proyecto",
      icon: <WorkOutlineOutlinedIcon />,
      path: "/proyecto",
    },
    {
      text: "Historias",
      icon: <LocalLibraryOutlinedIcon />,
      path: "/historias",
    },
    {
      text: "El Modelo",
      icon: <DashboardOutlinedIcon />,
      path: "/modelo",
    },
    {
      text: "Noticias",
      icon: <ArtTrackOutlinedIcon />,
      path: "/noticias",
    },
    /* {
      text: "Resultados",
      icon: <BarChartOutlinedIcon />,
      path: "/#fifthPage",
    }, */
  ];
  const anchor = "right";
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <>
        <Drawer
          className={classes.drawerMain}
          anchor={anchor}
          open={openDrawer[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div>
            <IconButton
              className={classes.iconbutton}
              onClick={toggleDrawerWait(anchor, false)}
              style={{
                margin: "10px 10px",
                transform: "rotate(180deg)",
              }}
            >
              <MenuOpenIcon />
            </IconButton>
          </div>

          <div
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawerWait(anchor, false)}
            onKeyDown={toggleDrawerWait(anchor, false)}
          >
            {/* list / links */}
            <List>
              {menuItems.map((item) => {
                return (
                  <ListItem
                    key={item.text}
                    button
                    onClick={() => {
                      return history.push(item.path);
                    }}
                    className={
                      location.pathname === item.path ? classes.active : null
                    }
                  >
                    <ListItemIcon className={classes.listicon}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Drawer>
        <div className={classes.page}>
          <IconButton
            className={classes.drawerButton}
            onClick={toggleDrawerWait(anchor, true)}
          >
            <MoreVertIcon style={{ color: "#DDDDDD", fontSize: "2rem" }} />
          </IconButton>

          {children}
        </div>
      </>
    </div>
  );
};

export default Layout;
