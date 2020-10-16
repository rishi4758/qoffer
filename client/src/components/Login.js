import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import MyButton from "./Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "400px",
    padding: 30,
    width: "auto",
    maxWidth: "400px",
    padding: 40,
  },
  desc: {
    color: "#9f9f9f",
    fontFamily: " Cera Pro",
    fontweight: 800,
    fontSize: "20px",
  },
  googleBtn: {
    backgroundColor: "#dd4b39",
    color: "white",
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      style={{ textAlign: "center" }}
    >
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="space-betwen"
      >
        <Grid container justify="center" item xs={12}>
          <h1>WELCOME TO</h1>
        </Grid>
        <Grid container justify="center" item xs={12}>
          <img src="./images/header-logo.svg" />
        </Grid>
        <Grid className={classes.desc}>
          Please Log in with your Google Account!
        </Grid>
        <Grid contianer justify="center">
          <Button
            href="http://localhost:5004/auth/google"
            style={{ backgroundColor: "#dd4b39" }}
            className={classes.googleBtn}
          >
            <i class="fa fa-google fa-fw"></i> Login with Google+
          </Button>{" "}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Login;
