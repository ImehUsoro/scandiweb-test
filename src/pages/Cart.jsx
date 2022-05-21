import React, { Component } from "react";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import { CartStyle } from "../styles/CartStyle";

export class Cart extends Component {
  render() {
    const {
      selectedProducts,
      setSelectedProducts,
      currentProduct,
      setCurrentProduct,
    } = this.props;

    return (
      <CartStyle>
        <p className="heading">Cart</p>
        {/* Cart Items */}
        {selectedProducts.length === 0 ? (
          <h2>There're no items in your cart</h2>
        ) : null}
        {selectedProducts?.map((product, id) => (
          <CartItem
            product={product}
            key={product.selectedSize}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        ))}

        {selectedProducts.length === 0 ? null : (
          <Total
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        )}
      </CartStyle>
    );
  }
}

export default Cart;
