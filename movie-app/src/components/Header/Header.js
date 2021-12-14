import React from "react";
import logo from "./TMDBLOGO.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className={styles.img} src={logo} />
      </a>
      <Link to="/signup">
        <h4>Sign Up</h4>
      </Link>
      <Link to="/login">
        <h4>Login</h4>
      </Link>
    </div>
  );
};

export default Header;
