import { useState, useContext } from "react";
import { AppContext } from "../../AppContext"
import "./Basket.css";
import CartItem from "../CartItem/CartItem"
const Basket = () => {

  const { cartItems} = useContext(AppContext);
  
 // console.log("cart items", cartItems)
  const itemPrice = cartItems.reduce((a,c)=> a+c.qty*c.fields.price,0)
  const addToCart = (product) => {
    

  }
  return (
    <div className="checkout">
      <div className="cart-navbar">
        <div className="navbar-item"> Items</div>
        <div className="navbar-item"> Unit Price</div>
        <div className="navbar-item"> Quantity</div>
        <div className="navbar-item"> Subtotal</div>
      </div>

      <div className="cart-navbar-body">
        {/* <CartItem /> */}
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })
        ) : (
          <h1> Cart is Empty</h1>
        )}
        <div className="sub-total">
          <p className="total-items"> # of Items {cartItems.length}</p>
          <p className="grand-total">subtotal ${itemPrice } </p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
