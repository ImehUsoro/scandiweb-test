import React, { Component } from "react";
import { SizesStyles } from "../styles/SizesStyle";

export class Sizes extends Component {
  render() {
    return (
      <SizesStyles>
        {this.props.cart ? "" : <p className="title">SIZE:</p>}
        <div className="sizes">
          <p>XS</p>
          <p>S</p>
          <p>M</p>
          <p>L</p>
        </div>
      </SizesStyles>
    );
  }
}

export default Sizes;
