import React, { useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(users);

  const onSubmit = () => {
    console.log("login successful");
  };

  return (
    <div>
      <Header />
      <h1>
        <Link exact to="/">
          Back
        </Link>{" "}
        / Login
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Username Required!",
              })}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="text"
              id="password"
              {...register("password", {
                required: "Password Required!",
              })}
            />
          </label>
        </div>
        <Button value="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
