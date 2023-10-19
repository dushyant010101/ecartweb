import React from "react";
import ShopComponents from "./ShopComponents/ShopComponents";
import ClothsBanner from "../Pages/banner/ClothsBanner";
import FoodBanner from "../Pages/banner/FoodBanner";
import ElectronicItemBanner from "../Pages/banner/ElectronicItemBanner";

const Shop = () => {
  return (
    <>
      <div>
        <ElectronicItemBanner />
        <ShopComponents category="electronic" />
        <ClothsBanner />
        <ShopComponents category="fastion" />
        <FoodBanner/>
        <ShopComponents category="food" />
      </div>
    </>
  );
};

export default Shop;
