import React from "react";
import ProductInfo from "../components/ProductInfo";
import imgClose from "@icons/icon_close.png";
import "@styles/ProductDetail.scss";
import useToggleShow from "../hooks/useToggleShow";

function ProductDetail({ product }) {
  const { toggleShow } = useToggleShow();
  return (
    <aside className="product-detail inactive">
      <div onClick={() => toggleShow()} className="product-detail-close">
        <img className="close-product-detail-icon" src={imgClose} alt="close" />
      </div>
      <ProductInfo product={product} />
    </aside>
  );
}

export default ProductDetail;
