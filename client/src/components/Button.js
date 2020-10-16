import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "green",
    height: "45px",
    width: "100px",
    borderRadius: "8px",
    fontWeight: 700,
    color: "white",
    fontWeight: 700,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2px",
    },
  },
  loginBtn: {
    fontWeight: 700,
    color: "white",
  },
}));
const MyButton = (props) => {
  const classes = useStyles();
  return (
    <div style={props.style} className={classes.login}>
      <Button className={classes.loginBtn} type="submit">
        {props.children}
      </Button>
    </div>
  );
};
export default MyButton;
