import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardStyle } from "../styles/ProductCardStyles";
import data from "../data";
import { GridContainer } from "../styles/GridContainer";
export class ProductCard extends Component {
  render() {
    const products = data.products;
    return (
      <GridContainer>
        {products.map((product) => (
          <ProductCardStyle key={product.id}>
            <img className="icon" src="cart-icon.png" alt="" />
            <Link to={`/product/${product.name}`}>
              <div className="product-image">
                <img src={product.src} alt={product.name} />
              </div>
            </Link>
            <Link to={`/product/${product.name}`}>
              <p>Apollo Running Shorts</p>
            </Link>
            <p>$50.00</p>
          </ProductCardStyle>
        ))}
      </GridContainer>
    );
  }
}

export default ProductCard;
