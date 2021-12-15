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

  const handleClick = () => {
    props.liftState(userSearch);
    setUserSearch("");
  };

  return (
    <><Header />
    <div className="upper-container">
      <Input
        id="search"
        type="text"
        onChange={handleChange}
        value={userSearch}
      />
      <Button
        type="submit"
        id="submit-btn"
        onClick={handleClick}
        value="Submit"
      />
    </div>
    </>
    
  );
};

export default Upper;
