import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <h1>
        <Link exact to="/">
          Back
        </Link>{" "}
        / Login
      </h1>
    </div>
  );
};

export default Login;
