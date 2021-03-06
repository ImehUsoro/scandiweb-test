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
    const {
      product,
      selectedProducts,
      setSelectedProducts,
      currentProduct,
      setCurrentProduct,
    } = this.props;

    return (
      <CartItemStyle>
        {/* Left */}

        <div className="product-details">
          {/* Name */}
          <ProductName cart product={product} />
          {/* Price */}
          <ProductPrice
            cart
            product={product}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          {/* Sizes */}
          <Sizes
            cart
            product={product}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          {/* Colors */}
          {product.attributes.find(
            (attribute) => attribute.type === "swatch"
          ) && (
            <Color
              cart
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          )}
        </div>
        {/* Right */}
        <ProductDisplay
          cart
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </CartItemStyle>
    );
  }
}

export default withCurrency(CartItem);
