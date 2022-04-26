import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import cart from "../images/icon.svg";
import { GridContainer } from "../styles/GridContainer";
import { useParams } from "react-router-dom";
import Tech from "./Tech";
import Clothes from "./Clothes";
import AllProducts from "./AllProducts";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Products extends Component {
  render() {
    const { all, clothes, tech } = this.props;
    let { category } = this.props.params;

    const allPrices = all?.products.map((product) => {
      return {
        price: product.prices[1],
      };
    });
    // console.log(allPrices);
    // console.log(category);

    return (
      <>
        <Heading name={category} />
        <GridContainer>
          {category === "all" ? (
            <AllProducts all={all} />
          ) : category === "clothes" ? (
            <Clothes clothes={clothes} />
          ) : category === "tech" ? (
            <Tech tech={tech} />
          ) : (
            <AllProducts all={all} />
          )}
        </GridContainer>
      </>
    );
  }
}

export default withParams(Products);
