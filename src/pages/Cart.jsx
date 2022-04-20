import React, { Component } from "react";
import Sizes from "../components/Sizes";
import { CartStyle } from "../styles/Cart";

export class Cart extends Component {
  render() {
    return (
      <CartStyle>
        <p className="heading">Cart</p>
        <div className="cart">
          <div>
            <p className="product-name">
              <strong>Apollo</strong> <br /> Running Short
            </p>
            <p className="product-price">$50.00</p>
            <Sizes cart />
          </div>
          {/* Right */}
          <div className="product-display">
            <div className="count-section">
              <div className="action">+</div>
              <span className="count">1</span>
              <div className="action">-</div>
            </div>
            <div>
              <img src="https://picsum.photos/141/185" alt="" />
            </div>
          </div>
        </div>
        <div className="cart">
          <div>
            <p className="product-name">
              <strong>Apollo</strong> <br /> Running Short
            </p>
            <p className="product-price">
              <strong>$50.00</strong>
            </p>
            <Sizes cart />
          </div>
          {/* Right */}
          <div className="product-display">
            <div className="count-section">
              <div className="action">+</div>
              <span className="count">1</span>
              <div className="action">-</div>
            </div>
            <div>
              <img src="https://picsum.photos/141/185" alt="" />
            </div>
          </div>
        </div>
      </CartStyle>
    );
  }
}

export default Cart;
