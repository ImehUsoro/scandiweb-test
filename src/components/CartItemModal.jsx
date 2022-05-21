import React, { Component } from "react";
import { CartItemModalStyles } from "../styles/CartItemModalStyle";
import Color from "./Color";
import ProductDisplay from "./ProductDisplay";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Sizes from "./Sizes";

export class CartItemModal extends Component {
  render() {
    const {
      product,
      selectedProducts,
      setSelectedProducts,
      currentProduct,
      setCurrentProduct,
    } = this.props;

    return (
      <CartItemModalStyles>
        <div className="product-details">
          <ProductName modal product={product} />
          <ProductPrice
            modal
            product={product}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          {product.attributes.find(
            (attribute) => attribute.type === "Size" || "Capacity"
          ) && (
            <Sizes
              modal
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          )}

          {product.attributes.find(
            (attribute) => attribute.type === "swatch"
          ) && (
            <Color
              modal
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          )}
        </div>
        {/* Right */}
        <ProductDisplay
          modal
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </CartItemModalStyles>
    );
  }
}

export default CartItemModal;
