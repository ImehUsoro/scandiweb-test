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
        <div>
          <ProductName cart product={product} />
          <span className="amount">
            {this.props.currency}
            {
              product.prices.filter(
                (item) => item.currency.symbol === this.props.currency
              )[0].amount
            }
          </span>
          <Sizes cart />
          <Color cart />
        </div>
        {/* Right */}
        <ProductDisplay cart product={product} />
      </CartItemStyle>
    );
  }
}

export default withCurrency(CartItem);
// product[0].prices.filter(
//         (item) => item.currency.symbol === this.props.currency
//       ),
