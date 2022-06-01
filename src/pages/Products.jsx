import React, { Component } from "react";
import Heading from "../components/Heading";
import { GridContainer } from "../styles/GridContainer";
import { useParams } from "react-router-dom";
import Tech from "./Tech";
import Clothes from "./Clothes";
import AllProducts from "./AllProducts";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Products extends Component {
  componentDidMount() {
    this.props.setCategory(this.props.params.category);
  }
  componentDidUpdate() {
    this.props.setCategory(this.props.params.category);
  }

  pushItemToCart = (prod) => {
    this.props.setSelectedProducts((prev) => {
      console.log(prod);
      return [...prev, prod];
    });
  };

  render() {
    const { all, clothes, tech, loading } = this.props;
    let { category } = this.props.params;

    return (
      <>
        <Heading name={category} />
        <GridContainer>
          {category === "all" ? (
            <AllProducts
              all={all}
              loading={loading}
              pushItemToCart={this.pushItemToCart}
            />
          ) : category === "clothes" ? (
            <Clothes
              clothes={clothes}
              loading={loading}
              pushItemToCart={this.pushItemToCart}
            />
          ) : category === "tech" ? (
            <Tech
              tech={tech}
              loading={loading}
              pushItemToCart={this.pushItemToCart}
            />
          ) : (
            <AllProducts
              all={all}
              loading={loading}
              pushItemToCart={this.pushItemToCart}
            />
          )}
        </GridContainer>
      </>
    );
  }
}

export default withParams(Products);
