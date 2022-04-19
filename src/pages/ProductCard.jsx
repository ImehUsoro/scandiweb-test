import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardStyle } from "../styles/ProductCardStyles";
import data from "../data";
import { GridContainer } from "../styles/GridContainer";
export class ProductCard extends Component {
  render() {
    const products = data.products;
    console.log("======");
    products.forEach((prod) => console.log(prod));
    return (
      <GridContainer>
        {products.map((product) => (
          <ProductCardStyle>
            <Link to={`/product/${product.name}`}>
              <img src={product.src} alt={product.name} />
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
