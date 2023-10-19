import React from "react";
import "./ProductDisplay.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay_img_list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>
        <div className="productdisplay_img">
          <img className="productdisplay_main_img" src="" alt="" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h2>{product.name}</h2>
        <div className="productdisplay_right_star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <p>(122)</p>
        </div>
        <div className="product_right_price">{product.oldprice}</div>
        <div className="product-display_rigtprice_new">{product.newprice}</div>
        <div className="product_display_right_discrubstion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam
          fuga harum eius libero magnam ab sapiente. Repellendus, mollitia eius
          laudantium excepturi, dolor natus atque harum unde reiciendis nemo
          rem.
        </div>
        <div className="product_display_right_side">
          <h2>Select Size</h2>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};
export default ProductDisplay;
