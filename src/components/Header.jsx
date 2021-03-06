import React, { Component } from "react";
import { HeaderStyle } from "../styles/HeaderStyles";
import { Link } from "react-router-dom";
import CartModalWrapper from "../wrappers/CartModalWrapper";
import logo from "../images/VSF.svg";
import cart from "../images/cart.svg";
import dropDown from "../images/downward.svg";
import dropUp from "../images/upward.svg";
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
      category,
      setCurrency,
      selectedItems,
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
          {headers?.map((item, i) => (
            <StyledLink to={`/${item.name}`} key={item.name}>
              <li className={item.name === category ? "active" : ""}>
                {item.name}
              </li>
            </StyledLink>
          ))}
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
            <div>
              <span>{currency}</span>
              {currencyDropDown ? (
                <img src={dropUp} alt="drop up" />
              ) : (
                <img src={dropDown} alt="drop down" />
              )}
            </div>
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
                    setCurrency("??");
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
                    setCurrency("??");
                  }}
                >
                  JPY
                </p>
                <p
                  onClick={() => {
                    setCurrency("???");
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
            {selectedItems.length > 0 ? (
              <span className="item-number">{selectedItems.length}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
