import React, { Component } from "react";
import { ProductCardStyle } from "../styles/ProductCardStyles";

export class ProductCard extends Component {
  render() {
    return (
      <ProductCardStyle>
        <img src={this.props.src} alt="" />
        <div>
          <p>Apollo Running Shorts</p>
          <p>$50.00</p>
        </div>
      </ProductCardStyle>
    );
  }
}

export default ProductCard;
