import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CartWrapper from "../components/CartWrapper";
import PDPWrapper from "../components/PDPWrapper";
import ProductsWrapper from "../components/ProductsWrapper";
import Cart from "./Cart";
import PDP from "./PDP";

export class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ProductsWrapper />} />
        <Route path="/product/:slug" element={<PDPWrapper />} />
        <Route path="/cart" element={<CartWrapper />} />
      </Routes>
    );
  }
}

export default Pages;
