import React, { Component } from "react";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";
import { TotalStyle } from "../styles/TotalStyles";

function withCurrency(Component) {
  return (props) => (
    <Component {...props} currency={useRecoilValue(currencyState)} />
  );
}
export class Total extends Component {
  render() {
    const { currency, selectedProducts, setSelectedProducts } = this.props;

    return (
      <TotalStyle>
        <p className="tax">
          Tax: <strong>$15.00</strong>
        </p>
        <p className="qty">
          Qty:
          <strong>
            {selectedProducts.reduce((accumulator, product) => {
              return accumulator + product.amount;
            }, 0)}
          </strong>
        </p>
        <p className="total">
          Total:
          <strong>
            {currency}
            {Math.round(
              selectedProducts.reduce((accumulator, product) => {
                return (
                  accumulator +
                  product.prices.filter(
                    (item) => item.currency.symbol === currency
                  )[0].amount *
                    product.amount
                );
              }, 0) * 100
            ) / 100}
          </strong>
        </p>
        <button
          onClick={() => {
            selectedProducts.length > 1
              ? alert("Your items have been shipped")
              : alert("Your item has been shipped");
            setSelectedProducts([]);
          }}
        >
          ORDER
        </button>
      </TotalStyle>
    );
  }
}

export default withCurrency(Total);

// const sum = arr.reduce((accumulator, object) => {
//   return accumulator + object.salary;
// }, 0);
