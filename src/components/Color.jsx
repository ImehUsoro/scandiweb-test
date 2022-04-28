import React, { Component } from "react";
import { ColorStyle } from "../styles/ColorStyles";

export class Color extends Component {
  render() {
    const { modal, cart, pdp, product } = this.props;
    // console.log(
    //   product.attributes.filter((attribute) => attribute.type === "swatch")
    // );
    return (
      <ColorStyle>
        <div className={`${pdp ? "pdp-container container" : "container"}`}>
          <p className={`${modal ? "modal-title" : "title"}`}>Color:</p>

          <div className={`${modal ? "modal-colors" : "colors"}`}>
            {product?.attributes
              ?.filter((attribute) => attribute.type === "swatch")
              .map((text) =>
                text.items.map((size) => (
                  <span
                    style={{ backgroundColor: size.value }}
                    key={size.value}
                  ></span>
                ))
              )}
          </div>
        </div>
      </ColorStyle>
    );
  }
}

export default Color;
