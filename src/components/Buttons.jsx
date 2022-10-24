import React from "react";
import "../styles/Buttons.scss";

function Button({
  value,
  type = "",
  styleName = "primary-button",
  children = null,
  onClick = null,
}) {
  return (
    <button onClick={() => onClick} type={type} className={styleName}>
      {children}
      {value}{" "}
    </button>
  );
}

export default Button;
