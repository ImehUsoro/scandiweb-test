import React, { Component } from "react";
import Header from "./components/Header";
import { AppStyle } from "./styles/AppStyle";
import ProductCard from "./components/ProductCard";
import { GridContainer } from "./styles/GridContainer";
import { ProductCardStyle } from "./styles/ProductCardStyles";
import { RecoilRoot } from "recoil";

export class App extends Component {
  render() {
    return (
      <RecoilRoot>
        <AppStyle>
          <Header />
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
      </RecoilRoot>
    );
  }
}

export default App;
