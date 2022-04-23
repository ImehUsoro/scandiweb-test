import React, { Component } from "react";
import { CartItemModalStyles } from "../styles/CartItemModalStyle";
import Color from "./Color";
import ProductDisplay from "./ProductDisplay";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Sizes from "./Sizes";

export class CartItemModal extends Component {
  render() {
    return (
      <CartItemModalStyles>
        <div>
          <ProductName modal />
          <ProductPrice modal />
          <Sizes modal />
          <Color modal />
        </div>
        {/* Right */}
        <ProductDisplay modal />
      </CartItemModalStyles>
    );
  }
}

export default CartItemModal;
