import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (product) => {
  console.log(product);
  const { name, img, seller, price, ratings, id } = product.product;
  const handleAddToCArt = product.handleAddToCArt;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price : ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCArt(product.product)}
        className="button-cart"
      >
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
