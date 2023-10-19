import React from "react";
import "./Offers.css"
import off from "./offerimg/offers.png"

const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>ONLY ON BEST SELLER PRODUCT</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={off} alt="" />
        </div>
      </div>
    </>
  );
};
export default Offers;
