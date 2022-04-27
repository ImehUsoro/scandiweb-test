import React, { Component } from "react";
import { AppStyle } from "./styles/AppStyle";
import Pages from "./pages/Pages";

export class App extends Component {
  componentDidMount() {
    this.props.setAllProducts(this.props.all?.products);
    this.props.setClothesProducts(this.props.clothes?.products);
    this.props.setTechProducts(this.props.tech?.products);
  }

  render() {
    // console.log(this.props.allProducts);
    const {
      all,
      tech,
      clothes,
      allProducts,
      setAllProducts,
      techProducts,
      setTechProducts,
      clothesProducts,
      setClothesProducts,
    } = this.props;
    // console.log(all);
    return (
      <AppStyle>
        <Pages />
      </AppStyle>
    );
  }
}

export default App;
