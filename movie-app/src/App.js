import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upper from "./components/Upper/Upper";
import Lower from "./components/Lower/Lower";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

function App() {
  const [userSearch, setUserSearch] = useState("");

  const userSearchChange = (input) => {
    setUserSearch(input);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Upper liftState={userSearchChange} />
          <Lower search={userSearch} />
        </Route>
        <Route exact path="/movie/:movieId">
          <MovieDetails />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
