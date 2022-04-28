import React, { Component } from "react";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";
import { ProductPriceStyle } from "../styles/ProductPriceStyle";

function withCurrency(Component) {
  return (props) => (
    <Component {...props} currency={useRecoilValue(currencyState)} />
  );
}
export class ProductPrice extends Component {
  render() {
    const { modal, pdp, cart, product } = this.props;
    return (
      <ProductPriceStyle>
        <div className={`${modal ? "modal-product-price" : "product-price"}`}>
          {pdp && <span className="text">PRICE:</span>}
          {product.prices
            .filter((item) => item.currency.symbol === this.props.currency)
            .map((value) => (
              <span
                key={value.amount}
                className={`${modal ? "modal-amount" : "amount"}`}
              >
                {this.props.currency}
                {value.amount}
              </span>
            ))}
        </div>
      </ProductPriceStyle>
    );
  }
}

export default withCurrency(ProductPrice);
