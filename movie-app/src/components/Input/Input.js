import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        value={props.value}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
