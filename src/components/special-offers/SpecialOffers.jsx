import React from "react";
import "./special-offers.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض كبيرة لليوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>ل 24 ساعة بس
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
