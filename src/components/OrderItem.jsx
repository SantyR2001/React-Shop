import React, { useContext } from "react";
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";
import AppContext from "../context/AppContext";

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className="Order-item">
      <figure>
        <img src={product.images[0]} className="order-img" alt="product-img" />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={close}
        className="image-close"
        alt="close"
        onClick={() => removeFromCart(product)}
      />
    </div>
  );
}

export default OrderItem;
