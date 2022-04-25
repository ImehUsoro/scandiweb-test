import React, { Component } from "react";
import { CartModalStyles, StyledLink } from "../styles/CartModalStyles";
import CartItemModal from "./CartItemModal";

export class CartModal extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setCartDropDown(false);
    }
  }
  render() {
    return (
      <CartModalStyles>
        <div ref={this.wrapperRef}>
          <p className="heading">
            <span>My Bag, </span>2 items
          </p>
          {/* Cart Item(s) */}
          <div className="cart-item">
            <CartItemModal />
            <CartItemModal />
          </div>
          {/* Total */}
          <div className="total">
            <p>Total</p>
            <span>$100.00</span>
          </div>
          {/* Bottom */}
          <div
            className="actions"
            onClick={() => {
              this.props.setCartDropDown(false);
            }}
          >
            <StyledLink className="view-bag" to={"/cart"}>
              <p>View Bag</p>
            </StyledLink>
            <div
              className="checkout"
              onClick={() => {
                alert("Your Item has been shipped");
                this.props.setCartDropDown(false);
              }}
            >
              <p>Check out</p>
            </div>
          </div>
        </div>
      </CartModalStyles>
    );
  }
}

export default CartModal;
