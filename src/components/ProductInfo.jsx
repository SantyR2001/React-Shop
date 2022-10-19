import React from "react";

function ProductInfo(props) {
  return (
    <div>
      <img id="productImg" src="./logos/pexels-photo-276517.jpeg" alt="bike" />
      <div className="product-info">
        <p id="productPrice"></p>
        <p id="productName"></p>
        <p id="productDesc"></p>
        <button className="primary-button add-to-cart-btn">
          <img src="./iconos/bt_add_to_cart.svg" alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
