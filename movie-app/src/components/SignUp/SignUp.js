import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { Link, useHistory } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const history = useHistory();

  const { register, formState, handleSubmit } = useForm();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState([]);

  const onSubmit = () => {
    setUser((prevState) => {
      return [...prevState, userDetails];
    });

    localStorage.setItem("user", JSON.stringify(user));

    alert(
      `Your account (${userDetails.username}) has been successfully created! Please check your email and confirm your registration `
    );

    history.push("/login");
  };

  return (
    <>
      <Header />
      <h1>
        <Link exact to="/">
          Back
        </Link>{" "}
        / Sign Up
      </h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              id="username"
              {...register("username", {
                onChange: (e) => {
                  setUserDetails((prevState) => {
                    return { ...prevState, username: e.target.value };
                  });
                },
                required: "Username Required!",
                minLength: {
                  message: "Username must be at least 5 characters!",
                  value: 5,
                },
              })}
            />
            <p style={{ color: "red" }}>
              {formState.errors.username && formState.errors.username.message}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="text"
              id="email"
              {...register("email", {
                onChange: (e) => {
                  setUserDetails((prevState) => {
                    return { ...prevState, email: e.target.value };
                  });
                },
                required: "Email Required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
              })}
            />
            <p style={{ color: "red" }}>
              {formState.errors.email && formState.errors.email.message}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="text"
              id="password"
              {...register("password", {
                onChange: (e) => {
                  setUserDetails((prevState) => {
                    return { ...prevState, password: e.target.value };
                  });
                },
                required: "Password required!",
                minLength: {
                  message: "Password must be at least 8 characters!",
                  value: 8,
                },
              })}
            />
            <p style={{ color: "red" }}>
              {formState.errors.password && formState.errors.password.message}
            </p>
          </label>
        </div>
        <div>
          <Button value="Register" type="submit" />
        </div>
      </form>
      </div>
      
    </>
  );
};

export default SignUp;
