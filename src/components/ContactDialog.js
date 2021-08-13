import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import "./ContactDialog.css";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="/">
        Puentes
      </Link>
      &nbsp;&copy;&nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    dialogButton: {
      color: "inherit",
      padding: "7px 1rem !important",
      textTransform: "none",
      border: "none",
      fontWeight: "400",
      fontSize: "15px",
      margin: "0px",
    },
    dialogTitle: {
      marginBottom: "10px",
      paddingBottom: "0px",
    },
    formButtonsCont: {
      margin: "1rem 0.5rem 1rem 0px",
    },
    formButtons: {
      padding: "11px 22px 5px",
    },
    form: {
      padding: "1rem",
    },
    submit: {},
  };
});

const ContactDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <Button
        variant="outlined"
        className={classes.dialogButton}
        onClick={handleClickOpen}
      >
        Contacto
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form className={classes.form}>
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            Formulario de Contacto
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Utiliza el formulario de contacto para solicitar más información
              sobre Puentes y todas las oportunidades que brindamos a los
              jóvenes.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre Completo"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Correo Electrónico"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Mensaje"
              multiline
              rows={4}
              fullWidth
            />
          </DialogContent>
          <DialogActions className={classes.formButtonsCont}>
            <Button
              onClick={handleClose}
              style={{ color: "#9e9e9e" }}
              className={classes.formButtons}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleClose}
              color="primary"
              className={classes.formButtons}
            >
              Enviar Mensaje
            </Button>
          </DialogActions>
          <Box mb={2}>
            <Copyright />
          </Box>
        </form>
      </Dialog>
    </>
  );
};

export default ContactDialog;
