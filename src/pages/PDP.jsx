import React, { Component } from "react";
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
          <p className="name">
            <strong>Apollo</strong> <br /> Running Short
          </p>
          <Sizes />
          <p className="price">
            <span> PRICE:</span> <br />
            $50.00
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
