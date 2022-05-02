import React, { Component } from "react";
import { SizesStyles } from "../styles/SizesStyle";

export class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
  }

  render() {
    const { modal, cart, pdp, product, selectedProducts, setSelectedProducts } =
      this.props;

    console.log(selectedProducts);
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
                size.items.map((values, i) => (
                  <span
                    key={values.value}
                    ref={this.sizeRef}
                    onClick={() => {
                      this.setState({ id: i });
                      setSelectedProducts((prev) =>
                        prev.map((prod) =>
                          prod.name === product.name
                            ? { ...prod, selectedSize: i }
                            : prod
                        )
                      );
                    }}
                    className={
                      pdp
                        ? this.state.id === i
                          ? "background"
                          : ""
                        : selectedProducts.filter(
                            (prod) => prod.name === product.name
                          )[0].selectedSize === i
                        ? "background"
                        : ""
                    }
                  >
                    {values.value}
                  </span>
                ))
              )}
          </div>
        </div>
      </SizesStyles>
    );
  }
}

export default Sizes;
