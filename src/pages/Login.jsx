import React from "react";
import Button from "../components/Buttons";
import "../styles/Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="form-container">
        <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form className="form">
          <label htmlFor="email" className="label">
            {" "}
            Email address{" "}
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input input-password"
          />
          <label htmlFor="password" className="label">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <Button
            type="submit"
            value="Log in"
            styleName="primary-button login-button"
          />
          <a href="/"> Forgot my password </a>
        </form>
        <Button value="Sign Up" styleName="secondary-button signup-button" />
      </div>
    </div>
  );
}

export default Login;
