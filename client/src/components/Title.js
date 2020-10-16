import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  desc: {
    color: "#9f9f9f",
    fontFamily: " Cera Pro",
    fontweight: 800,
    fontSize: "20px",
  },
  btn: {
    maxHeight: 40,
    maxWidth: 20,
    marginTop: 20,
    fontSize: 15,
  },
}));
const Title = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container justify="center" alignItems="center" item xs={12}>
        <Grid item xs={12}>
          <h1>Some of the best features Products</h1>
        </Grid>
        <Grid item className={classes.desc} xs={12}>
          Urgently need a product or maybe the first time in a new city and want
          to quickly buy a new product?
        </Grid>
      </Grid>
      <Grid
        container
        item="xs={12}"
        className={classes.btn}
        alignItems="flex-end"
      >
        <Link style={{ textDecoration: "none" }} to="/add">
          <Tooltip TransitionComponent={Zoom} title="Add Products">
            <Button>
              <span style={{ fontSize: 40 }}>+</span>
            </Button>
          </Tooltip>
        </Link>
      </Grid>
    </Grid>
  );
};
export default Title;
