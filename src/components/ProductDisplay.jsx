import React, { Component } from "react";
import { ProductDisplayStyle } from "../styles/ProductDisplayStyle";
import left from "../images/toggle-left.svg";
import right from "../images/toggle-right.svg";

export class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onclick(type) {
    this.setState((prevState) => {
      if (
        type === "add" &&
        prevState.count > this.props.product.images.length - 2
      ) {
        return null;
      }
      if (type === "sub" && prevState.count === 0) {
        return null;
      } else {
        return {
          count: type === "add" ? prevState.count + 1 : prevState.count - 1,
        };
      }
    });
  }
  render() {
    const { modal, cart, product } = this.props;

    return (
      <ProductDisplayStyle>
        {/* Left */}
        <div className="count-section">
          <span className={`${modal ? "modal-action btn" : "action btn"}`}>
            +
          </span>
          <span className="count">{product?.amount}</span>
          <span className={`${modal ? "modal-action btn" : "action btn"}`}>
            -
          </span>
        </div>
        {/* Right */}
        <div className="image-section">
          {
            <img
              src={product?.images[this.state.count]}
              alt=""
              className={`${modal ? "modal-image" : "main"}`}
            />
          }
          {cart && (
            <div className="image-toggles">
              <img
                src={left}
                alt="left toggle"
                onClick={this.onclick.bind(this, "sub")}
              />
              <img
                src={right}
                alt="right toggle"
                onClick={this.onclick.bind(this, "add")}
              />
            </div>
          )}
        </div>
      </ProductDisplayStyle>
    );
  }
}

export default ProductDisplay;
