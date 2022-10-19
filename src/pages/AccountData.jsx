import React from "react";
import Button from "../components/Buttons";
import "../styles/AccountData.scss";

function AccountData(props) {
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
            <p className="value"> Jeff </p>
            <label htmlFor="email" className="label">
              {" "}
              Email{" "}
            </label>
            <p className="value"> Platzi@example.com </p>
            <label htmlFor="password" className="label">
              {" "}
              Password{" "}
            </label>
            <p className="value"> ******** </p>
          </div>
          <Button value="Edit" styleName="secondary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default AccountData;
