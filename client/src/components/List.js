import React, { useState, useCallback } from "react";
import { deleteProducts } from "../store/actions";

import Card from "./Card";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

const List = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const deleteItem = useCallback(
    async (id) => {
      await dispatch(deleteProducts(id));
    },
    [dispatch]
  );

  const data = useSelector((state) => state.data.List);

  const renderItem = useCallback(() => {
    return data.map((obj) => {
      if (obj.p_id) {
        {
          return (
            <Grid item xs={12} sm={6} md={6}>
              <Card id={obj.p_id} deleteItem={deleteItem}></Card>
            </Grid>
          );
        }
      }
      return;
    });
  }, [data]);
  return (
    <React.Fragment>
      <Title />{" "}
      <Grid style={{ marginTop: "80px" }} container justify="flex-start">
        {renderItem()}
      </Grid>
    </React.Fragment>
  );
};

export default List;
