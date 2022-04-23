import React, { Component } from "react";
import { TotalStyle } from "../styles/TotalStyles";

export class Total extends Component {
  render() {
    return (
      <TotalStyle>
        <p className="tax">
          Tax: <strong>$15.00</strong>
        </p>
        <p className="qty">
          Qty: <strong>3</strong>
        </p>
        <p className="total">
          Total: <strong>$200.00</strong>
        </p>
        <button
          onClick={() => {
            alert("Your Item has been shipped");
          }}
        >
          ORDER
        </button>
      </TotalStyle>
    );
  }
}

export default Total;
