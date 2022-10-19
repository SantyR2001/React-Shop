import React from "react";
import Button from "../components/Buttons";

function Account(props) {
  return (
    <div className="login">
      <div className="form-container">
        <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">My account</h1>
        <form className="form">
          <div>
            <label htmlFor="name" className="label">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="input input-name"
            />
            <label htmlFor="email" className="label">
              {" "}
              Email{" "}
            </label>
            <input
              type="text"
              id="email"
              placeholder="Platzi@example.com"
              className="input input-email"
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
          </div>
          <Button value="Create" styleName="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default Account;
