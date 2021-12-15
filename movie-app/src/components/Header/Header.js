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

      <h4>
        <Link to="/signup">Sign Up</Link> / <Link to="/login">Login</Link>
      </h4>
    </div>
  );
};

export default Header;
