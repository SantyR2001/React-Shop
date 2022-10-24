import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "@styles/DesktopMenu.scss";

function Menu(props) {
  return (
    <div class="desktop-menu">
      <ul>
        <li>
          <a href="/orders">My orders</a>
        </li>

        <li>
          <a href="/account">My account</a>
        </li>

        <li>
          <a href="/">
            Sign out <FaSignOutAlt />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
