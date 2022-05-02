import React, { Component } from "react";
import { CartModalStyles } from "../styles/CartModalStyles";
import { StyledLink } from "../styles/ProductCardStyles";
import CartItemModal from "./CartItemModal";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";

function withCurrency(Component) {
  return (props) => (
    <Component {...props} currency={useRecoilValue(currencyState)} />
  );
}
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
    const { currency, selectedProducts, setSelectedProducts } = this.props;

    return (
      <CartModalStyles>
        <div ref={this.wrapperRef}>
          <p className="heading">
            <span>My Bag, </span>
            {selectedProducts.length > 0 && selectedProducts.length}
            {selectedProducts.length === 0
              ? "no items"
              : selectedProducts.length > 1
              ? " items"
              : " item"}
          </p>
          {/* Cart Item(s) */}
          <div className="cart-item">
            {selectedProducts?.map((product) => (
              <CartItemModal
                key={product.name}
                product={product}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            ))}
          </div>
          {/* Total */}
          {selectedProducts.length > 0 && (
            <div className="total">
              <p>Total</p>
              <span>
                {currency}
                {selectedProducts.reduce((accumulator, product) => {
                  return (
                    accumulator +
                    product.prices.filter(
                      (item) => item.currency.symbol === currency
                    )[0].amount
                  );
                }, 0)}
              </span>
            </div>
          )}

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
            {selectedProducts.length > 0 && (
              <div
                className="checkout"
                onClick={() => {
                  setSelectedProducts([]);
                  alert("Your Item has been shipped");
                  this.props.setCartDropDown(false);
                }}
              >
                <p>Check out</p>
              </div>
            )}
          </div>
        </div>
      </CartModalStyles>
    );
  }
}

export default withCurrency(CartModal);
