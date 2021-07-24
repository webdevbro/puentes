import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";

import YoutubeEmbed from "./YoutubeEmbed";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "2px solid lime",
    },
    title: {},
  };
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OpenDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullWidth="100%"
        maxWidth="100%"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* <IconButton
          edge="false"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          size="small"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton> */}
        <div className={classes.root}>
          <YoutubeEmbed embedId="WxIRFf-u_Bs" />
        </div>
      </Dialog>
    </>
  );
};

export default OpenDialog;
