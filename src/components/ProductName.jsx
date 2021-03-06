import React, { Component } from "react";
import { ProductStyle } from "../styles/ProductNameStyle";

export class ProductName extends Component {
  render() {
    const { modal, pdp, cart, product } = this.props;

    return (
      <ProductStyle>
        <p
          className={`${
            modal
              ? "modal-product-name"
              : pdp
              ? "pdp-product-name product-name-bold"
              : cart
              ? "cart-product-name product-name-bold"
              : ""
          }`}
        >
          {product?.brand} <br />
          <span>{product?.name}</span>
        </p>
      </ProductStyle>
    );
  }
}

export default ProductName;
