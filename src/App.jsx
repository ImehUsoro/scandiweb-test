import React, { Component } from "react";
import Header from "./components/Header";
import { AppStyle } from "./styles/AppStyle";
import { Route, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { GridContainer } from "./styles/GridContainer";
import HeaderWrapper from "./components/HeaderWrapper";
import Heading from "./components/Heading";

export class App extends Component {
  render() {
    return (
      <AppStyle>
        <HeaderWrapper />
        <Heading />
        <GridContainer>
          <ProductCard src="apollo-running-shorts.png" />
          <ProductCard src="brown.png" />
          <ProductCard src="out-of-stock.png" />
          <ProductCard src="cloth-bag.png" />
          <ProductCard src="apollo-running-shorts.png" />
          <ProductCard src="dress.png" />
        </GridContainer>
      </AppStyle>
    );
  }
}

export default App;
