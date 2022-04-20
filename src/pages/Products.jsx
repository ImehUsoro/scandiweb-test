import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import data from "../data";
import { GridContainer } from "../styles/GridContainer";
export class ProductCard extends Component {
  render() {
    const products = data.products;
    return (
      <>
        <Heading />
        <GridContainer>
          {products.map((product) => (
            <ProductCardStyle key={product.id}>
              <img className="icon" src="cart-icon.png" alt="" />
              <Link to={`/product/${product.name}`}>
                <div className="product-image">
                  <img src={product.src} alt={product.name} />
                </div>
              </Link>
              <StyledLink to={`/product/${product.name}`}>
                <p className="product-name">Apollo Running Shorts</p>
              </StyledLink>
              <p className="price">$50.00</p>
            </ProductCardStyle>
          ))}
        </GridContainer>
      </>
    );
  }
}

export default ProductCard;
