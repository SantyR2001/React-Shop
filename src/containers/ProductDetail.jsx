import React from "react";
import ProductInfo from "../components/ProductInfo";

function ProductDetail(props) {
  return (
    <aside id="productDetail" className="product-detail inactive">
      <div className="product-detail-close">
        <img
          className="close-product-detail-icon"
          src="./iconos/icon_close.png"
          alt="close"
        />
      </div>
      <ProductInfo />
    </aside>
  );
}

export default ProductDetail;
