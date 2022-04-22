import React, { Component } from "react";
import { Link } from "react-router-dom";
import Color from "../components/Color";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import Sizes from "../components/Sizes";
import { PDPstyle } from "../styles/PDP";
export class PDP extends Component {
  render() {
    return (
      <PDPstyle>
        {/* First */}
        <div className="product-display">
          <img src="https://picsum.photos/80" alt="" />
          <img src="https://picsum.photos/80" alt="" />
          <img src="https://picsum.photos/80" alt="" />
        </div>
        {/* Second */}
        <div className="product">
          <img src="https://picsum.photos/610/512" alt="" />
        </div>
        {/* Third */}
        <div className="product-info">
          <ProductName pdp />
          <Sizes pdp />
          <Color pdp />
          <ProductPrice pdp />
          <Link to={"/cart"}>
            <button>ADD TO CART</button>
          </Link>
          <p className="description">
            Fine stunning women's cocktail dress and party dresses. Stand out in
            lace and metallic cocktail and party dresses from all your favorite
            brands
          </p>
        </div>
      </PDPstyle>
    );
  }
}

export default PDP;
