import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import Rating from "./../../components/rating/Rating";
import "./special-offer-page.css";
import ProductDescription from "./ProductDescription";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/apiCalls/cartApiCall";

const SpecialOfferPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const product = specialOffers.find((p) => p.id === +id);
  const { images, title, rating, reviews, price, discount } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const calculateDiscount = price - (discount * product) / 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add To Cart Handle
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: id,
        quantity: qty,
        price: price,
        title: title,
        image: images[0],
      })
    );
  };

  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {images.map((source, index) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={source}
                className="select-img"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">{price}</b>
            <b className="special-offer-final-price-item">
              {calculateDiscount}
            </b>
          </div>
          <div className="special-offer-page-add-to-cart">
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
    </>
  );
};

export default SpecialOfferPage;
