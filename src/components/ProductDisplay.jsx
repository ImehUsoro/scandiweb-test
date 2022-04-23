import React, { Component } from "react";
import { ProductDisplayStyle } from "../styles/ProductDisplayStyle";

export class ProductDisplay extends Component {
  render() {
    const { modal, cart } = this.props;
    return (
      <ProductDisplayStyle>
        {/* Left */}
        <div className="count-section">
          <span className={`${modal ? "modal-action btn" : "action btn"}`}>
            +
          </span>
          <span className="count">1</span>
          <span className={`${modal ? "modal-action btn" : "action btn"}`}>
            -
          </span>
        </div>
        {/* Right */}
        <div>
          <img
            src={`${
              modal
                ? "https://picsum.photos/121/190"
                : "https://picsum.photos/200/290"
            }`}
            alt=""
          />
        </div>
      </ProductDisplayStyle>
    );
  }
}

export default ProductDisplay;
