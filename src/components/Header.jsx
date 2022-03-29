import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: "$", showCurrency: false, showCart: false };
  }
  render() {
    return (
      <HeaderStyle>
        {/* first */}
        <ul>
          <li className="active">Women</li>
          <li>Men</li>
          <li>Kids</li>
        </ul>
        {/* second */}
        <div>
          <img src="cart-logo.png" alt="" />
        </div>
        {/* third */}
        <div className="cart">
          <button
            onClick={() => {
              this.setState({ showCurrency: !this.state.showCurrency });
            }}
          >
            <span>{this.state.currency}</span>
            {this.state.showCurrency ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
            {this.state.showCurrency ? (
              <div className="currency">
                <button
                  onClick={() => {
                    this.setState({ currency: "$" });
                  }}
                >
                  $ USD
                </button>
                <button
                  onClick={() => {
                    this.setState({ currency: "€" });
                  }}
                >
                  € EUR
                </button>
                <button
                  onClick={() => {
                    this.setState({ currency: "¥" });
                  }}
                >
                  ¥ JPY
                </button>
              </div>
            ) : null}
          </button>

          <div>
            <img src="shopping-cart.png" alt="cart" />
            <span className="item-number">{2}</span>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
