import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import MyButton from "./Button";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },

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
      marginRight: "50px",
    },
    "&:hover": {
      color: "green",
      fontWeight: 700,
      border: "1px solid #000",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const user = useSelector((state) => {
    return state.data.User;
  });

  return (
    <div className={classes.container}>
      <div>
        <img src="./images/header-logo.svg" />
      </div>
      <div>
        <Button
          href="http://localhost:5004/auth/logout"
          className={classes.login}
          type="submit"
        >
          {user != null ? `Logout` : `Login`}
        </Button>
      </div>
    </div>
  );
};
export default Header;
