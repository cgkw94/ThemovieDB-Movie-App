import React from "react";

const Button = (props) => {
  return (
    <>
      <button type={props.type} id={props.id} onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
};

export default Button;
