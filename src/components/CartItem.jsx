import React, { Component } from "react";
import { CartItemStyle } from "../styles/CartItemStyles";
import Color from "./Color";
import ProductDisplay from "./ProductDisplay";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Sizes from "./Sizes";

export class CartItem extends Component {
  render() {
    const { modal } = this.props;
    return (
      <CartItemStyle>
        {/* Left */}
        <div>
          <ProductName cart />
          <ProductPrice cart />
          <Sizes cart />
          <Color cart />
        </div>
        {/* Right */}
        <ProductDisplay />
      </CartItemStyle>
    );
  }
}

export default CartItem;
