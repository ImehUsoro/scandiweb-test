import React, { Component } from "react";
import Sizes from "../components/Sizes";
import data from "../data";
import { PDPstyle } from "../styles/PDP";
export class PDP extends Component {
  render() {
    const products = data.products;

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
          <p className="name">
            <strong>Apollo</strong> <br /> Running Shorts
          </p>
          <Sizes />
          <p className="price">
            Price: <br />
            <span>$50.00</span>
          </p>
          <button>ADD TO CART</button>
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
