import React from "react";
import { Link } from "react-router-dom";
import Rating from "./../../components/rating/Rating";

const ProductItem = ({ product }) => {
  const { id, image, title, rating, reviews, price } = product;
  return (
    <Link className="product-item" to={`/products/${id}`} key={id}>
      <img src={image} alt={title} className="product-item-img" />
      <h3 className="product-item-title">{title}</h3>
      <Rating reviews={reviews} rating={rating} />
      <div className="product-item-price">${price}</div>
    </Link>
  );
};

export default ProductItem;
