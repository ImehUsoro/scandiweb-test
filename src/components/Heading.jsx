import React, { Component } from "react";
import { HeadingStyles } from "../styles/HeadingStyles";

export class Heading extends Component {
  render() {
    const { name } = this.props;
    return <HeadingStyles>{!name ? "all" : name}</HeadingStyles>;
  }
}

export default Heading;
