import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.img} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price">
          <div className="item-price-new">{props.newprice}</div>
          <div className="old-price-old">{props.oldprice}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
