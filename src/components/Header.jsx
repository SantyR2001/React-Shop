import React from "react";
import "../styles/Header.scss";

function Header(props) {
  return (
    <nav>
      <img src="./iconos/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
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
          <li className="navbar-email disp-none-desk">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img
              className="img-shopping-cart"
              src="./iconos/icon_shopping_cart.svg"
              alt="shopping-cart"
            />
            <div id="quantityBadge">0</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;