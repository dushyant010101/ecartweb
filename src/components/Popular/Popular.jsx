import React ,{useContext}from "react";
import Item from "../Item/Item";
import {ShopContext} from "../context/ShopContext"
import "./Popular.css";

const Popular = (props) => {
  const { All_product } = useContext(ShopContext);
  return (
    <>
      <div className="popular">
        <h2>POPULAR PRODUCT</h2>
        <hr />
        <div className="popular-item">
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
      </div>
    </>
  );
};
export default Popular;
