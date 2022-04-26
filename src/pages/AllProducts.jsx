import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import cart from "../images/icon.svg";

export class AllProducts extends Component {
  render() {
    const { all } = this.props;
    return (
      <>
        {all?.products.map((product) => (
          <ProductCardStyle key={product.id}>
            <img className="icon" src={cart} alt="" />
            <Link to={`/product/${product.name}`}>
              <div className="product-image">
                <img src={product.gallery[0]} alt={product.name} />
              </div>
            </Link>
            <StyledLink to={`/product/${product.name}`}>
              <p className="product-name">{product.name}</p>
              <p>$50.00</p>
            </StyledLink>
          </ProductCardStyle>
        ))}
      </>
    );
  }
}

export default AllProducts;
