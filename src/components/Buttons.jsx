import React from "react";
import "../styles/Buttons.scss";

function Button({ value, type = "", styleName = "primary-button" }) {
  return (
    <button type={type} className={styleName}>
      {" "}
      {value}{" "}
    </button>
  );
}

export default Button;
