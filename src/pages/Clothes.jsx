import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import cart from "../images/icon.svg";

export class Clothes extends Component {
  render() {
    const { clothes } = this.props;

    return (
      <>
        {clothes?.products.map((product) => (
          <ProductCardStyle key={product.id}>
            <div className={!product.inStock ? "no-stock" : ""}>
              <img className="icon" src={cart} alt="" />
              {!product.inStock && <p className="out-of-stock">OUT OF STOCK</p>}
              <StyledLink to={`/product/${product.id}`}>
                <div className="product-image">
                  <img src={product.gallery[0]} alt={product.name} />
                </div>
              </StyledLink>
              <StyledLink to={`/product/${product.id}`}>
                <p className="product-name">{product.name}</p>
                <p>$50.00</p>
              </StyledLink>
            </div>
          </ProductCardStyle>
        ))}
      </>
    );
  }
}

export default Clothes;
