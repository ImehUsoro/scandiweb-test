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
                {/* {console.log(product)}
              {console.log(product.prices.map((item) => item))} */}
              </StyledLink>
            </div>
          </ProductCardStyle>
        ))}
      </>
    );
  }
}

export default AllProducts;

//  primary={product.inStock ? false : true}
