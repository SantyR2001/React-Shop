import React, { useContext } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import "@styles/Header.scss";
import iconCartMenu from "@icons/icon_shopping_cart.svg";
import iconMenu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import MyOrder from "@containers/MyOrder";
import useToggleShow from "../hooks/useToggleShow";

function Header() {
  const { state } = useContext(AppContext);
  const { toggleState, toggleShow } = useToggleShow();

  return (
    <nav>
      <img
        onClick={() => toggleShow("showMobileMenu")}
        src={iconMenu}
        alt="menu"
        className="menu"
      />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className="disp-none-desk">
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li
            onClick={() => toggleShow("showDesktopMenu")}
            className="navbar-email disp-none-desk"
          >
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img
              onClick={() => toggleShow("showCart")}
              className="img-shopping-cart"
              src={iconCartMenu}
              alt="shopping-cart"
            />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleState.showDesktopMenu && <Menu />}
      {toggleState.showMobileMenu && <MobileMenu />}
      {toggleState.showCart && <MyOrder />}
    </nav>
  );
}

export default Header;
