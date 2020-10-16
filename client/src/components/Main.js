import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
import { fetchProducts, deleteProducts } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 200,
    marginRight: 200,
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
      marginRight: "5px",
    },
  },
}));
const Main = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(fetchProducts());
  }, []);

  return (
    <div className={classes.container}>
      <Header />
    </div>
  );
};

export default Main;
