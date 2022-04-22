import React, { Component } from "react";
import CartItem from "../components/CartItem";
import ProductName from "../components/ProductName";
import Total from "../components/Total";
import { CartStyle } from "../styles/CartStyle";

export class Cart extends Component {
  render() {
    return (
      <CartStyle>
        <p className="heading">Cart</p>
        {/* Cart Items */}
        <CartItem />
        <CartItem />
        <Total />
      </CartStyle>
    );
  }
}

export default Cart;
