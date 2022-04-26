import React, { Component } from "react";
import { AppStyle } from "./styles/AppStyle";
import Pages from "./pages/Pages";

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <AppStyle>
        <Pages />
      </AppStyle>
    );
  }
}

export default App;
