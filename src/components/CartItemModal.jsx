import React, { Component } from "react";
import { CartItemModalStyles } from "../styles/CartItemModalStyle";
import Color from "./Color";
import ProductDisplay from "./ProductDisplay";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Sizes from "./Sizes";

export class CartItemModal extends Component {
  render() {
    const { product } = this.props;
    return (
      <CartItemModalStyles>
        <div className="product-details">
          <ProductName modal product={product} />
          <ProductPrice modal product={product} />
          {product.attributes.length > 0 ? (
            <Sizes modal product={product} />
          ) : null}

          {product.attributes.filter((attribute) => attribute.type === "swatch")
            .length > 0 ? (
            <Color modal product={product} />
          ) : null}
        </div>
        {/* Right */}
        <ProductDisplay modal product={product} />
      </CartItemModalStyles>
    );
  }
}

export default CartItemModal;
