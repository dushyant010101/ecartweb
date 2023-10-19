import React from "react";
import "./ElectronicItemBanner.css";
import elec from "./bimg/elec.png";

const ElectronicItemBanner = () => {
  return (
    <>
      <div className="banner_e">
        <div className="banner_e-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>ONLY ON BEST SELLER PRODUCT</p>
        </div>
        <div className="banner_e-right">
          <img src={elec} alt="" />
        </div>
      </div>
    </>
  );
};

export default ElectronicItemBanner;
