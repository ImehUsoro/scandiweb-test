import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartModalWrapper from "../wrappers/CartModalWrapper";
import logo from "../images/VSF.svg";
import cart from "../images/cart.svg";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.currencyRef = React.createRef();
    this.cartRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  handleClickOutside(event) {
    if (this.currencyRef && !this.currencyRef.current.contains(event.target)) {
      this.props.setCurrencyDropDown(false);
    }
    if (this.cartRef && !this.cartRef.current.contains(event.target)) {
      this.props.setCartDropDown(false);
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
        {/* Modal */}
        {cartDropDown && <CartModalWrapper />}
        {/* first */}
        <ul>
          <li className="active">Women</li>
          <li>Men</li>
          <li>Kids</li>
        </ul>
        {/* second */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* third */}
        <div className="checkout">
          <button
            ref={this.currencyRef}
            onClick={() => {
              setCurrencyDropDown(!currencyDropDown);
            }}
          >
            <span>{currency}</span>
            {currencyDropDown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            {currencyDropDown && (
              <div className="currency">
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
            ref={this.cartRef}
            onClick={() => {
              setCartDropDown(!cartDropDown);
            }}
          >
            <img src={cart} alt="cart" />
            <span className="item-number">{2}</span>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
