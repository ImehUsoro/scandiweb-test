import React, { Component } from "react";
import Products from "../pages/Products";
import { SizesStyles } from "../styles/SizesStyle";

export class Sizes extends Component {
  render() {
    const { modal, cart, pdp, product } = this.props;

    return (
      <SizesStyles>
        <div
          className={`${
            modal
              ? "modal-container container"
              : pdp
              ? "pdp-container container"
              : cart
              ? "cart-container container"
              : ""
          }`}
        >
          <p className={`${modal ? "modal-title" : "title"}`}>Sizes:</p>
          <div className={`${modal ? "modal-sizes" : "sizes"}`}>
            {product?.attributes
              ?.filter(
                (attribute) =>
                  attribute.name === "Size" || attribute.name === "Capacity"
              )
              .map((size) =>
                size.items.map((values) => (
                  <span key={values.value}>{values.value}</span>
                ))
              )}
          </div>
        </div>
      </SizesStyles>
    );
  }
}

export default Sizes;
