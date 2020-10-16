import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { Grid, Button, Paper } from "@material-ui/core";
import MyButton from "./Button";
import { editProducts } from "../store/actions";
import { makeStyles } from "@material-ui/core/styles";

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
    margin: 10,
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
  preview: {
    height: "100px",
    width: "300px",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "150px",
    },
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
const modal = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const obj = useSelector((state) => {
    return state.data.List.find((item) => {
      return item.p_id === parseInt(props.match.params.id);
    });
  });
  const Dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name ? name : obj.name);
    formData.append("description", description ? description : obj.description);
    formData.append("price", price ? price : obj.price);
    formData.append("image", image ? image : obj.image);
    await Dispatch(editProducts(obj.p_id, formData, props.history));
  };

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
              <label for="exampleFormControlInput1">Device Name:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="text"
                className={classes.input}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                defaultValue={obj.name}
                id="exampleFormControlInput1"
                placeholder="type name.."
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
              <label for="exampleFormControlInput1">Description:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="text"
                defaultValue={obj.description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className={classes.input}
                id="exampleFormControlInput1"
                placeholder="type description.."
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
              <label for="exampleFormControlInput1">Price:</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              <input
                type="text"
                defaultValue={obj.price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className={classes.input}
                id="exampleFormControlInput1"
                placeholder="type price"
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
              <label for="exampleFormControlInput1">Image</label>
            </Grid>
            <Grid container item xs={6} justify="center">
              {console.log(obj.image)}
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
                className={classes.imageInput}
              />
            </Grid>
            <Grid container justify="center" alignItems="center" item xs={12}>
              <img
                className={classes.preview}
                src={`/images/${image ? image.name : obj.image}`}
              ></img>
            </Grid>

            <Grid container className={classes.btnCont} item xs={12}>
              <Grid container item xs={6} justify="center">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className={classes.btn}>Back</Button>
                </Link>
              </Grid>
              <Grid container item xs={6} justify="center">
                <Button
                  type="submit"
                  className={classes.btn}
                  onClick={() => {}}
                >
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

export default modal;
