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

  render() {
    const { all, clothes, tech } = this.props;
    let { category } = this.props.params;

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
