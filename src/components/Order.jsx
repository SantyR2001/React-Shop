import React from "react";
import OrderItem from "./OrderItem";

function Order(props) {
  return (
    <div className="order">
      <div>
        <p>
          <span>10.03.2021</span>
          <span>6 articles</span>
        </p>
      </div>
      <p>$560.00</p>
    </div>
  );
}

export default Order;
