import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartItem.css";
import iphone from "../../Data/data/iphone.png";

const CartItem = () => {
  return (
    <>
      <div className="cartitems">
        <div className="cart_item_formetmain">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          <div className="cartsitemfromet cart_item_formetmain">
            <img src={iphone} alt="" />
            <p>Iphone 15</p>
            <p>$500</p>
            <button className="Cartitem_quntity">1</button>
            <p>$500</p>
            <DeleteIcon style={{ cursor: "pointer" }} />
          </div>
          <hr />
        </div>
        <div className="cartitemdown">
          <div className="carts_itemtotal">
            <h2>Carts Totals</h2>
            <div>
              <div className="carts_item_total">
                <p>Subtotal</p>
                <p>$500</p>
              </div>
              <hr />
              <div className="carts_item_total">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="carts_item_total">
                <h3>Total</h3>
                <h3>$500</h3>
              </div>
            </div>
            <button>PROCCED TO CHECKOUT</button>
          </div>
          <div className="cartitems_promo">
            <p>if you have promo code, Enter it here </p>
            <div className="cartitempromobox">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
