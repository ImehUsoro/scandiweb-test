import React, { Component } from "react";
import Header from "./components/Header";
import { AppStyle } from "./styles/AppStyle";
import { Route, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { GridContainer } from "./styles/GridContainer";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: "$", showCurrency: false, showCart: false };
  }
  render() {
    return (
      <AppStyle>
        <Header
          currency={this.state.currency}
          showCurrency={this.state.showCurrency}
          showCart={this.state.showCart}
        />
        <h1>Category name</h1>
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
