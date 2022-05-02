import React, { Component } from "react";
import { ProductDisplayStyle } from "../styles/ProductDisplayStyle";
import left from "../images/toggle-left.svg";
import right from "../images/toggle-right.svg";

export class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, amount: 1 };
  }

  imageToggle(type) {
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
    const { modal, cart, product, setSelectedProducts } = this.props;

    return (
      <ProductDisplayStyle>
        {/* Left */}
        <div className="count-section">
          <span
            className={`${modal ? "modal-action btn" : "action btn"}`}
            onClick={() => {
              setSelectedProducts((prev) =>
                prev.map((item) =>
                  item.name === product.name
                    ? { ...item, amount: product.amount + 1 }
                    : item
                )
              );
            }}
          >
            +
          </span>
          <span className="count">{product.amount}</span>
          <span
            className={`${modal ? "modal-action btn" : "action btn"}`}
            onClick={() => {
              setSelectedProducts((prev) =>
                prev.map((item) =>
                  item.name === product.name
                    ? {
                        ...item,
                        amount:
                          product.amount === 1
                            ? product.amount
                            : product.amount - 1,
                      }
                    : item
                )
              );
            }}
          >
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
                onClick={this.imageToggle.bind(this, "sub")}
              />
              <img
                src={right}
                alt="right toggle"
                onClick={this.imageToggle.bind(this, "add")}
              />
            </div>
          )}
        </div>
      </ProductDisplayStyle>
    );
  }
}

export default ProductDisplay;
