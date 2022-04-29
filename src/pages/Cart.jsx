import React, { Component } from "react";
import { useRecoilValue } from "recoil";
import { selectedProductsState } from "../atoms/cartAtom";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import { CartStyle } from "../styles/CartStyle";

function withSelectedItems(Component) {
  return (props) => (
    <Component {...props} products={useRecoilValue(selectedProductsState)} />
  );
}

export class Cart extends Component {
  render() {
    const { products } = this.props;
    // console.log(products);
    return (
      <CartStyle>
        <p className="heading">Cart</p>
        {/* Cart Items */}
        {products?.map((product, id) => (
          <CartItem product={product} key={id} />
        ))}
        <Total />
      </CartStyle>
    );
  }
}

export default withSelectedItems(Cart);
