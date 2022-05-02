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
    const { modal, pdp, product, currency, selectedProducts } = this.props;

    return (
      <ProductPriceStyle>
        <div className={`${modal ? "modal-product-price" : "product-price"}`}>
          {pdp && <span className="text">PRICE:</span>}
          {product?.prices
            ?.filter((item) => item.currency.symbol === currency)
            .map((value) => (
              <span
                key={value.amount}
                className={`${modal ? "modal-amount" : "amount"}`}
              >
                {currency}
                {pdp
                  ? value.amount
                  : Math.round(
                      value.amount *
                        selectedProducts?.filter(
                          (prod) => prod.name === product.name
                        )[0].amount *
                        100
                    ) / 100}
              </span>
            ))}
        </div>
      </ProductPriceStyle>
    );
  }
}

export default withCurrency(ProductPrice);
