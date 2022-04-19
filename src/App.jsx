import React, { Component } from "react";
import Header from "./components/Header";
import { AppStyle } from "./styles/AppStyle";
import { Route, Link, Routes } from "react-router-dom";
import ProductCard from "./pages/ProductCard";
import { GridContainer } from "./styles/GridContainer";
import HeaderWrapper from "./components/HeaderWrapper";
import Heading from "./components/Heading";
import Pages from "./pages/Pages";

export class App extends Component {
  render() {
    return (
      <AppStyle>
        <HeaderWrapper />
        <Heading />
        <Pages />
      </AppStyle>
    );
  }
}

export default App;
