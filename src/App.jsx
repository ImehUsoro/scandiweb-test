import React, { Component } from "react";
import { AppStyle } from "./styles/AppStyle";
import Pages from "./pages/Pages";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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
