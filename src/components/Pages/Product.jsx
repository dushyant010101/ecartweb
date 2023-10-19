import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router";
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const Product = () => {
  const { All_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = All_product.find((e) => e.id === Number(productId));
  return (
    <>
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
    </>
  );
};
export default Product;
