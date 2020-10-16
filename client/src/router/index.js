import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddItem from "../components/AddItem";
import Edit from "../components/Edit";
import List from "../components/List";
import Login from "../components/Login";

const Router = () => {
  const user = useSelector((state) => state.data.User);
  return (
    <BrowserRouter>
      <Route exact path="/" component={user ? List : Login} exact={true} />
      <Route exact path="/add" component={AddItem} exact={true} />
      <Route exact path="/edit/:id" component={Edit} exact={true} />
      <Route exact path="/login" component={Login} exact={true} />
    </BrowserRouter>
  );
};
export default Router;
