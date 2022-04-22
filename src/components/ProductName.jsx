import React, { Component } from "react";
import { ProductStyle } from "../styles/ProductNameStyle";

export class ProductName extends Component {
  render() {
    const { modal, pdp, cart } = this.props;
    return (
      <ProductStyle>
        <p
          className={`${
            modal
              ? "modal-product-name"
              : pdp
              ? "pdp-product-name"
              : "product-name"
          }`}
        >
          <strong>Apollo</strong> <br /> Running Short
        </p>
      </ProductStyle>
    );
  }
}

export default ProductName;
