import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import cart from "../images/icon.svg";
import { GridContainer } from "../styles/GridContainer";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Products extends Component {
  render() {
    const { all, clothes, tech } = this.props;
    let { category } = this.props.params;

    const allPrices = all?.products.map((product) => {
      return {
        price: product.prices,
      };
    });
    console.log(allPrices);

    // all?.products.map((product) => console.log(product));

    return (
      <>
        <Heading />
        <GridContainer>
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
                <p>{"50"}</p>
              </StyledLink>
            </ProductCardStyle>
          ))}
        </GridContainer>
      </>
    );
  }
}

export default withParams(Products);
