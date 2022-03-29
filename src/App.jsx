import React, { Component } from "react";
import Header from "./components/Header";
import { AppStyle } from "./styles/AppStyle";
import ProductCard from "./components/ProductCard";
import { GridContainer } from "./styles/GridContainer";
import { ProductCardStyle } from "./styles/ProductCardStyles";

export class App extends Component {
  render() {
    return (
      <AppStyle>
        <Header />
        <h1>Category name</h1>
        <GridContainer>
          <ProductCardStyle>
            <ProductCard />
            <ProductCard />
          </ProductCardStyle>
        </GridContainer>
      </AppStyle>
    );
  }
}

export default App;
