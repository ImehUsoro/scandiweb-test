import React, { Component } from "react";
import { ProductPriceStyle } from "../styles/ProductPriceStyle";

export class ProductPrice extends Component {
  render() {
    const { modal, pdp, cart } = this.props;
    return (
      <ProductPriceStyle>
        <div className={`${modal ? "modal-product-price" : "product-price"}`}>
          {pdp && <span className="text">PRICE:</span>}
          <span className={`${modal ? "modal-amount" : "amount"}`}>$50.00</span>
        </div>
      </ProductPriceStyle>
    );
  }
}

export default ProductPrice;
