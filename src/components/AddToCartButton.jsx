import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddToCartButton extends Component {
  render() {
    const { product, pushToSelected, noStock } = this.props;

    return (
      <>
        {noStock ? (
          <button disabled={!product?.inStock}>ITEM NOT IN STOCK</button>
        ) : (
          <button onClick={pushToSelected} disabled={!product?.inStock}>
            ADD TO CART
          </button>
        )}
      </>
    );
  }
}

export default AddToCartButton;
