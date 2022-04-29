import React, { Component } from "react";
import { ColorStyle } from "../styles/ColorStyles";

export class Color extends Component {
  constructor(props) {
    super(props);
    // this.colorRef = React.createRef();
    this.state = { key: 0 };
  }

  pushToSelected() {}
  render() {
    const { modal, cart, pdp, product } = this.props;
    // console.log(this.colorRef.current?.innerText);

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
                    ref={this.colorRef}
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
