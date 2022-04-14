import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import CartContent from "./CartContent";
import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { cartDropDown } from "../atoms/cartAtom";
// import { currencyDropDown, currencyState } from "../atoms/currencyAtom";
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
        <Link to="/">
          <img src="cart-logo.png" alt="" />
        </Link>

        {/* third */}
        <div className="checkout">
          <button
            onClick={() => {
              this.setState({ showCurrency: !this.state.showCurrency });
            }}
          >
            <span>{this.props.currency}</span>
            {this.state.showCurrency ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
            {this.state.showCurrency && (
              <div className="currency">
                <p
                  onClick={() => {
                    this.setState({ currency: "$" });
                  }}
                >
                  $ USD
                </p>
                <p
                  onClick={() => {
                    this.setState({ currency: "€" });
                  }}
                >
                  € EUR
                </p>
                <p
                  onClick={() => {
                    this.setState({ currency: "¥" });
                  }}
                >
                  ¥ JPY
                </p>
              </div>
            )}
          </button>

          <div
            className="cart"
            onClick={() => {
              this.setState({ showCart: !this.state.showCart });
            }}
          >
            <img src="shopping-cart.png" alt="cart" />
            <span className="item-number">{2}</span>
            {this.state.showCart && (
              <div className="drop-down">
                <CartContent />
              </div>
            )}
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
