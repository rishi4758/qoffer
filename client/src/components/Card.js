import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { withRouter } from "react-router";

import Button from "@material-ui/core/Button";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: 5,
    opacity: 0.9,
    marginTop: 15,

    "&:hover": {
      backgroundColor: "#FBF8F6",
      opacity: 1,
      boxShadow: " inset 0  100px 200px 55px #ccc",
    },
  },
  img: {
    position: "relative",
    height: "230px",
    // width: "100%",
    width: 200,
    objectFit: "cover",
    borderRadius: 8,

    [theme.breakpoints.down("sm")]: {
      height: "180px",
      // width: "100%",
      width: 150,
    },
  },
  image: {
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
  },
  btn: {
    height: "35px",
    color: "white",
    fontSize: "15px",
    fontWeight: 700,
    margin: 15,
    backgroundColor: "green",
    borderRadius: "10px",
    "&:hover": {
      color: "green",
      fontWeight: 700,
      border: "1px solid #000",
      fontSize: "15px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      margin: 1,
      borderRadius: 5,
      padding: 0,
      paddingRight: 2,
      "&:hover": {
        fontSize: "10px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      margin: 5,
    },
  },
  price: {
    position: "absolute",
    fontSize: "40px",
    bottom: " 8px",
    left: "30px",
    fontSize: "30px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      bottom: " 8px",
      left: "21x",
      fontSize: "30px",
      color: "white",
    },
  },
  name: {
    fontSize: 35,
    fontFamily: "ariel",
    fontWeight: 900,
    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  desc: {
    position: "relative",
    height: "100px",
    padding: 8,

    fontSize: "16px",
    color: "green",
    fontWeight: 600,
    width: "90%",
    wordWrap: "break-word",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      padding: 2,
    },
  },
}));

const MyCard = (props) => {
  const classes = useStyles();
  const data = useSelector((state) => {
    return state.data.List.find((obj) => obj.p_id == props.id);
  });

  return (
    <Paper elivation={15} className={classes.Paper}>
      <Grid container justify=" space-between" alignItems="flex-start">
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          className={classes.image}
          item
          xs={6}
        >
          <img
            alt="Contemplative Reptile"
            className={classes.img}
            src={`./images/${data.image}`}
            title="Contemplative Reptile"
          ></img>
          <Grid
            container
            justify="center"
            className={classes.price}
            item
            xs={12}
          >
            ${data.price}
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.inform} item xs={6}>
          <Grid
            className={classes.name}
            alignItems="center"
            justfy="center"
            item
            xs={12}
          >
            {data.name}
          </Grid>

          <Grid container alignItems="flex-start" item xs={12}>
            <div className={classes.desc}>{data.description}</div>
          </Grid>

          <Grid container alignItems="center" className={classes.btnContainer}>
            <Grid item>
              <Link to={`/edit/${props.id}`} style={{ textDecoration: "none" }}>
                <Button className={classes.btn}>
                  <EditOutlinedIcon /> Edit
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <Link
                href="/"
                onClick={() => {
                  props.deleteItem(props.id);
                }}
                style={{ textDecoration: "none" }}
              >
                <Button size="large" className={classes.btn}>
                  <DeleteOutlineIcon size="small" /> Delete
                </Button>{" "}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(MyCard);
