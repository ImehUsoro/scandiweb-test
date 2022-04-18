import React, { Component } from "react";
import { HeadingStyles } from "../styles/HeadingStyles";

export class Heading extends Component {
  render() {
    return (
      <HeadingStyles>
        <p>Category name</p>
      </HeadingStyles>
    );
  }
}

export default Heading;
