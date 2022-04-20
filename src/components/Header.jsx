import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setCurrencyDropDown(false);
    }
  }
  render() {
    const {
      currency,
      setCurrency,
      cartDropDown,
      setCartDropDown,
      currencyDropDown,
      setCurrencyDropDown,
    } = this.props;

    return (
      <HeaderStyle>
        {/* first */}
        {cartDropDown && <div className="cart-modal">test</div>}
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
              setCurrencyDropDown(!currencyDropDown);
            }}
          >
            <span>{currency}</span>
            {currencyDropDown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            {currencyDropDown && (
              <div className="currency" ref={this.wrapperRef}>
                <p
                  onClick={() => {
                    setCurrency("$");
                  }}
                >
                  $ USD
                </p>
                <p
                  onClick={() => {
                    setCurrency("€");
                  }}
                >
                  € EUR
                </p>
                <p
                  onClick={() => {
                    setCurrency("¥");
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
              setCartDropDown(!cartDropDown);
            }}
          >
            <img src="shopping-cart.png" alt="cart" />
            <span className="item-number">{2}</span>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
