import React, { Component } from "react";
import { AppStyle } from "./styles/AppStyle";
import HeaderWrapper from "./wrappers/HeaderWrapper";
import Pages from "./pages/Pages";

export class App extends Component {
  render() {
    return (
      <AppStyle>
        <HeaderWrapper />
        <main>
          <Pages />
        </main>
      </AppStyle>
    );
  }
}

export default App;
