import React, { Component } from "react";
import { ColorStyle } from "../styles/ColorStyles";

export class Color extends Component {
  render() {
    const { modal, cart, pdp } = this.props;
    return (
      <ColorStyle>
        <div className={`${pdp ? "pdp-container container" : "container"}`}>
          <p className={`${modal ? "modal-title" : "title"}`}>Color:</p>

          <div className={`${modal ? "modal-colors" : "colors"}`}>
            <span className="grey"></span>
            <span className="black"></span>
            <span className="green"></span>
          </div>
        </div>
      </ColorStyle>
    );
  }
}

export default Color;
