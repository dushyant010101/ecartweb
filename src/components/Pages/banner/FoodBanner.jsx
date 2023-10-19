import React from "react";
import "./FoodBanner.css"
import food from "./bimg/food.png"

const FoodBanner = () => {
  return (
    <>
      <div className="banner_f">
        <div className="banner_f-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>ONLY ON BEST SELLER PRODUCT</p>
        </div>
        <div className="banner_f-right">
          <img src={food} alt="" />
        </div>
      </div>
    </>
  );
};

export default FoodBanner;
