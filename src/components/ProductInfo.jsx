import React from "react";
import Button from "./Buttons";
import imgAdd from "@icons/bt_add_to_cart.svg";
import "@styles/ProductDetail.scss";

function ProductInfo({ product }) {
  return (
    <div>
      <img src={product.images[1]} className="product-detail-img" alt="bike" />
      <div className="product-info">
        <p>{product.price}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <Button
          value={`Add to cart`}
          styleName="primary-button add-to-cart-btn"
          children={<img src={imgAdd} alt="Add to cart" />}
        />
      </div>
    </div>
  );
}

export default ProductInfo;
