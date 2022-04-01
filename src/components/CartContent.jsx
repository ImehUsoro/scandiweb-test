import React, { Component } from "react";
import { CartContentStyles } from "../styles/CartContentStyles";

export class CartContent extends Component {
  render() {
    return (
      <CartContentStyles>
        <p>
          <span>My bag,</span> 2 items
        </p>
        fill
      </CartContentStyles>
    );
  }
}

export default CartContent;
