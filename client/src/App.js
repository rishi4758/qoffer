import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/actions";
import Main from "./components/Main";
import Router from "./router";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(fetchUser());
  });
  return (
    <div className="App">
      <Main />
      <Router />
    </div>
  );
}

export default App;
