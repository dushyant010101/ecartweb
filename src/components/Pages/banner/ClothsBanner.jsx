import React from "react";
import "./Banner.css"
import cloths from "./bimg/cloths.png"

const ClothsBanner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>ONLY ON BEST SELLER PRODUCT</p>
        </div>
        <div className="banner-right">
          <img src={cloths} alt="" />
        </div>
      </div>
    </>
  );
};

export default ClothsBanner;
