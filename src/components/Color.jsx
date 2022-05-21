import React, { Component } from "react";
import { ColorStyle } from "../styles/ColorStyles";

export class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  pushToSelected() {}
  render() {
    const {
      modal,
      pdp,
      product,
      selectedProducts,
      setSelectedProducts,
      setCurrentProduct,
    } = this.props;

    return (
      <ColorStyle>
        <div className={`${pdp ? "pdp-container container" : "container"}`}>
          <p className={`${modal ? "modal-title" : "title"}`}>Color:</p>

          <div className={`${modal ? "modal-colors" : "colors"}`}>
            {product?.attributes
              ?.filter((attribute) => attribute.type === "swatch")
              .map((text) =>
                text.items.map((size, i) => (
                  <span
                    style={{ backgroundColor: size.value }}
                    key={size.value}
                    onClick={() => {
                      this.setState({ id: i });
                      setCurrentProduct((prev) => ({
                        ...prev,
                        selectedColor: i,
                      }));
                    }}
                    className={
                      pdp
                        ? this.state.id === i
                          ? "background"
                          : ""
                        : selectedProducts.find(
                            (prod) =>
                              prod.selectedColor === product.selectedColor
                          ).selectedColor === i
                        ? "background"
                        : ""
                    }
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
