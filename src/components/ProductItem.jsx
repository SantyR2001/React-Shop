import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import btnAdd from "@icons/bt_add_to_cart.svg";
import ProductDetail from "../containers/ProductDetail";
import defaultImage from "../assets/images/imagen-no-disponible.jpg";
import useToggleShow from "../hooks/useToggleShow";
import btnAdded from "@icons/bt_added_to_cart.svg";

function ProductItem({ product }) {
  const { addToCart, removeFromCart } = useContext(AppContext);
  const { toggleShow, toggleState } = useToggleShow();
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (item) => {
    if (isAdded === false) {
      addToCart(item);
      setIsAdded(true);
    } else {
      removeFromCart(item);
      setIsAdded(false);
    }
  };

  return (
    <div>
      <div className="product-card">
        <img
          onClick={() => toggleShow("showProductDetail")}
          src={product.images[0] ? product.images[0] : defaultImage}
          alt="product-image"
        />
        <div className="product-card-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            {!isAdded === true ? (
              <img src={btnAdd} alt="AddToCart" />
            ) : (
              <img src={btnAdded} alt="AddToCart" />
            )}
          </figure>
        </div>
      </div>
      {toggleState.showProductDetail && (
        <ProductDetail toggleShow={toggleShow} product={product} />
      )}
    </div>
  );
}

export default ProductItem;
