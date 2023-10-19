import React, { useContext } from "react";
import "./css/ShopComponents.css";
import Item from "../../Item/Item";
import { ShopContext } from "../../context/ShopContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ShopComponents = (props) => {
  const { All_product } = useContext(ShopContext);

  return (
    <>
      <div className="shop_category">
        <div className="shop-category_indexshot">
          <p>
            <span>Showing 1-12</span> out of 30 product
          </p>
          <div className="shopcategory_sort">
            short by <ExpandMoreIcon />
          </div>
        </div>
        <div className="shopcategory_product">
          {All_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  newprice={item.newprice}
                  oldprice={item.oldprice}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory_lordmore">Explore More</div>
      </div>
    </>
  );
};

export default ShopComponents;
