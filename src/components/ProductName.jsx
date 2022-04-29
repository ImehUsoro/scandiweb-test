import React, { Component } from "react";
import { ProductStyle } from "../styles/ProductNameStyle";

export class ProductName extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
  }

  // pushToSelected = () => {
  //   this.props.setSelectedProducts((prev) => {
  //     return [...prev, { name: this.props.product?.name }];
  //   });
  // };
  render() {
    const { modal, pdp, cart, product, selectedProducts } = this.props;
    // console.log(selectedProducts);

    // console.log(this.nameRef.current?.innerText);

    return (
      <ProductStyle>
        <p
          className={`${
            modal
              ? "modal-product-name"
              : pdp
              ? "pdp-product-name product-name-bold"
              : cart
              ? "cart-product-name product-name-bold"
              : ""
          }`}
        >
          <strong ref={this.nameRef}>{product?.name}</strong>
        </p>
      </ProductStyle>
    );
  }
}

export default ProductName;

// onClick={this.pushToSelected}
