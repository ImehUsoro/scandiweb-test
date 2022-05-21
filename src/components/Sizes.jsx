import React, { Component } from "react";
import { SizesStyles } from "../styles/SizesStyle";

export class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }
  // Function that creates an object for the product displayed when mounted
  componentDidMount = () => {
    if (this.props.loading) {
    } else {
      const product = this.props.all?.find(
        (item) => item.id === this.props.params.id
      );

      // Creates an object from found item
      const productDetails = {
        name: this.props.product.name,
        brand: this.props.product.brand,
        prices: this.props.product.prices,
        attributes: this.props.product.attributes,
        images: this.props.product.gallery,
        amount: 1,
        selectedSize: 0,
        selectedColor: 0,
      };
      this.props.setCurrentProduct(productDetails);
    }
  };
  render() {
    const {
      modal,
      cart,
      pdp,
      product,
      selectedProducts,
      setSelectedProducts,
      currentProduct,
      setCurrentProduct,
    } = this.props;

    console.log(currentProduct);
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
                      setCurrentProduct((prev) => ({
                        ...prev,
                        selectedSize: i,
                      }));
                    }}
                    className={
                      pdp
                        ? this.state.id === i
                          ? "background"
                          : ""
                        : selectedProducts.find(
                            (prod) => prod.selectedSize === product.selectedSize
                          ).selectedSize === i
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
