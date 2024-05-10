import React from "react";

const Button = ({buttonClass,label, handleClick}) => {
  return <button className={buttonClass} onClick={handleClick}>{label}</button>;
};

export default Button;