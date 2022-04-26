import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartModalWrapper from "../wrappers/CartModalWrapper";
import logo from "../images/VSF.svg";
import cart from "../images/cart.svg";
import { StyledLink } from "../styles/ProductCardStyles";
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
  }
  render() {
    const {
      headers,
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
          {headers?.map((item) => (
            <StyledLink to={`/${item.name}`} key={item.name}>
              <li className={`${item.name === "all" ? "active" : ""}`}>
                {item.name}
              </li>
            </StyledLink>
          ))}
        </ul>
        {/* second */}
        <Link to="/all">
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
                  {" "}
                  USD
                </p>
                <p
                  onClick={() => {
                    setCurrency("£");
                  }}
                >
                  GBP
                </p>
                <p
                  onClick={() => {
                    setCurrency("A$");
                  }}
                >
                  AUD
                </p>
                <p
                  onClick={() => {
                    setCurrency("¥");
                  }}
                >
                  JPY
                </p>
                <p
                  onClick={() => {
                    setCurrency("₽");
                  }}
                >
                  RUB
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
            <img src={cart} alt="cart" />
            <span className="item-number">{2}</span>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
