import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import PDP from "./PDP";
import ProductCard from "./Products";

export class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:slug" element={<PDP />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
  }
}

export default Pages;
