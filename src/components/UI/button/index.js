import React from "react";
import "./style.css"

const Button = ({children, type = 'button', onClick = null}) => {
  return (
    <button
      type={type}
      className="Button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;