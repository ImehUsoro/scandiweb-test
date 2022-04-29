import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddToCartButton extends Component {
  render() {
    const { product, pushToSelected, selected, noStock } = this.props;

    return (
      <Link to={"/cart"}>
        {selected ? (
          <button disabled>ITEM ALREADY IN CART</button>
        ) : noStock ? (
          <button disabled={!product?.inStock}>ITEM NOT IN STOCK</button>
        ) : (
          <button onClick={pushToSelected} disabled={!product?.inStock}>
            ADD TO CART
          </button>
        )}
      </Link>
    );
  }
}

export default AddToCartButton;
