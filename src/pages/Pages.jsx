import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import PDP from "./PDP";
import ProductCard from "./ProductCard";

export class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:slug" element={<PDP />} />
      </Routes>
    );
  }
}

export default Pages;
