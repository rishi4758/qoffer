import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

import { insertProducts } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxHeight: 800,
    maxWidth: 600,
    padding: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
  },
  formGroup: {
    margin: 20,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      marginTop: 8,
    },
  },

  input: {
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    outlineColor: "rgba(214, 214, 214, 1)",
    outlineWidth: " 1px",
    border: "2px solid rgba(214, 214, 214, 1)",
    borderRadius: "5px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  imageInput: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 60,
    },
  },
  btnCont: {
    marginTop: 30,
  },
  btn: {
    height: "30px",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "green",
      fontWeight: 700,
      border: "1px solid #000",
    },
  },
}));

const AddItem = (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const Dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    await Dispatch(insertProducts(formData, props.history));
  };
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Paper elevation={4} className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.formGroup}
          >
            <Grid container item xs={6} justify="center">
              <label>Device Name:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="text"
                className={classes.input}
                id="exampleFormControlInput1"
                placeholder="type name.."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.formGroup}
          >
            <Grid container item xs={6} justify="center">
              <label>Description:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="text"
                className={classes.input}
                id="exampleFormControlInput1"
                placeholder="type description.."
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                minLength="20"
                maxLength="80"
                required
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.formGroup}
          >
            <Grid container item xs={6} justify="center">
              <label>Price:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="number"
                className={classes.input}
                id="exampleFormControlInput1"
                placeholder="type price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
                minLength="0"
                maxLength="6"
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.formGroup}
          >
            <Grid container item xs={6} justify="center">
              <label>Image:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="file"
                className={classes.imageInput}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                required
              />
            </Grid>
            <Grid container className={classes.btnCont} item xs={12}>
              <Grid container item xs={6} justify="center">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className={classes.btn}>Back</Button>
                </Link>
              </Grid>
              <Grid container item xs={6} justify="center">
                <Button type="submit" className={classes.btn}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddItem;
