import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CartWrapper from "../wrappers/CartWrapper";
import PDPWrapper from "../wrappers/PDPWrapper";
import ProductsWrapper from "../wrappers/ProductsWrapper";

export class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ProductsWrapper />} />
        <Route path="/product/:slug" element={<PDPWrapper />} />
        <Route path="/cart" element={<CartWrapper />} />
        <Route path="/:category" element={<ProductsWrapper />} />
      </Routes>
    );
  }
}

export default Pages;
