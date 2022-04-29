import React, { Component } from "react";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";
import { CartItemStyle } from "../styles/CartItemStyles";
import Color from "./Color";
import ProductDisplay from "./ProductDisplay";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Sizes from "./Sizes";

function withCurrency(Component) {
  return (props) => (
    <Component {...props} currency={useRecoilValue(currencyState)} />
  );
}
export class CartItem extends Component {
  render() {
    const { modal, product } = this.props;
    return (
      <CartItemStyle>
        {/* Left */}
        <div className="product-details">
          {/* Name */}
          <ProductName cart product={product} />
          {/* Price */}
          <ProductPrice cart product={product} />

          <Sizes cart product={product} />
          {product.attributes.filter((attribute) => attribute.type === "swatch")
            .length > 0 ? (
            <Color cart product={product} />
          ) : null}
        </div>
        {/* Right */}
        <ProductDisplay cart product={product} />
      </CartItemStyle>
    );
  }
}

export default withCurrency(CartItem);
