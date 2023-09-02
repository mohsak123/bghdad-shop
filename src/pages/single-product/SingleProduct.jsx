import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./../../components/rating/Rating";
import ProductDescription from "./../special-offer-page/ProductDescription";
import "./single-product.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import SpinnerCom from "../../components/spinner/SpinnerCom";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const [qty, setQty] = useState(1);

  window.scrollTo(0, 0);
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  // Add To Cart Handle
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) {
    return <SpinnerCom />;
  }

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكمية</div>
            <input
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              اضافة الى سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
