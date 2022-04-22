import React, { Component } from "react";
import { SizesStyles } from "../styles/SizesStyle";

export class Sizes extends Component {
  render() {
    const { modal, cart, pdp } = this.props;
    return (
      <SizesStyles>
        <div
          className={`${
            modal ? "modal-container" : pdp ? "pdp-container" : "container"
          }`}
        >
          <p className={`${modal ? "modal-title" : "title"}`}>Sizes:</p>
          <div
            className={`${modal ? "modal-sizes" : pdp ? "pdp-sizes" : "sizes"}`}
          >
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
        </div>
      </SizesStyles>
    );
  }
}

export default Sizes;
