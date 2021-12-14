import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, formState, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("submitted");
  };

  console.log(formState.errors);

  return (
    <>
      <Header />
      <h1>
        <Link exact to="/">
          Back
        </Link>{" "}
        / Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p style={{ color: "red" }}>
            {formState.errors.username && formState.errors.username.message}
          </p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username Required!",
              minLength: {
                message: "Username must be at least 5 characters!",
                value: 5,
              },
            })}
          />
        </div>
        <div>
          <p style={{ color: "red" }}>
            {formState.errors.email && formState.errors.email.message}
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email Required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          />
        </div>
        <div>
          <p style={{ color: "red" }}>
            {formState.errors.password && formState.errors.password.message}
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            {...register("password", {
              required: "Password required!",
            })}
          />
        </div>
        <div>
          <Button value="Register" type="submit" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
