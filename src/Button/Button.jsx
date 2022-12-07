import React from "react";
import "./Button.css";
const Button = ({ text, myfunction, icon }) => {
  return (
    <div className="common_button" onClick={myfunction}>
      {icon}
      {text}
    </div>
  );
};

export default Button;
