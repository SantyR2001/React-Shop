import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "@styles/MyOrder.scss";
import imgArrow from "@icons/flechita.svg";
import useToggleShow from "../hooks/useToggleShow";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const { toggleShow } = useToggleShow();

  const getDate = () => {
    const time = Date.now();
    const today = new Date(time);
    return today.toLocaleDateString();
  };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={imgArrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.length ? (
          <div className="order-content">
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        ) : (
          <p className="not-orders-text">You don't have orders yet</p>
        )}
        <div className="bottom-container">
          <div className="order">
            <div>
              <p>
                <span>{getDate()}</span>
                <span>{state.cart.length} articles</span>
              </p>
            </div>
            <p>Total = ${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
