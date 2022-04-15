import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardStyle } from "../styles/ProductCardStyles";

export class ProductCard extends Component {
  render() {
    return (
      <ProductCardStyle>
        <Link to={"/"}>
          <img src={this.props.src} alt="" />
        </Link>
        <div>
          <Link to={"/"}>
            <p>Apollo Running Shorts</p>
          </Link>
          <p>$50.00</p>
        </div>
      </ProductCardStyle>
    );
  }
}

export default ProductCard;
