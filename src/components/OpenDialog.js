import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, Slide, Typography } from "@material-ui/core";
import YoutubeEmbed from "./YoutubeEmbed";
import "./OpenDialog.css";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
  };
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OpenDialog = (props) => {
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
      <Typography variant="h4" className="historiasTitle">
        {props.title}
      </Typography>
      <Typography variant="body1" className="desc">
        {props.desc}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className="historiasButton"
        onClick={handleClickOpen}
      >
        Ir a la historia
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={false}
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
          <YoutubeEmbed embedId={props.embedId} />
        </div>
      </Dialog>
    </>
  );
};

export default OpenDialog;
