import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Header from "../Header/Header";
import "./Upper.module.css";

const Upper = (props) => {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (event) => {
    setUserSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.liftState(userSearch);
    setUserSearch("");
  };

  return (
    <>
      <Header />
      <div className="upper-container">
        <form onSubmit={handleClick}>
          <Input
            id="search"
            type="text"
            onChange={handleChange}
            value={userSearch}
            placeholder="Search Movie"
          />
          <Button type="submit" id="submit-btn" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Upper;
