import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upper from "./components/Upper/Upper";
import Lower from "./components/Lower/Lower";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const [userSearch, setUserSearch] = useState("");

  //lift state function
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
