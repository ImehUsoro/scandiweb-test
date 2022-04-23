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
import Categories from "./components/GraphQL/Categories";
export class App extends Component {
  render() {
    const errorLink = onError(({ graphqlErrors, networkErrors }) => {
      if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
          alert(`Graphql error ${message} `);
        });
      }
    });

    const link = from([
      errorLink,
      new HttpLink({ uri: "http://localhost:4000" }),
    ]);

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: link,
    });
    return (
      <ApolloProvider client={client}>
        <AppStyle>
          <Pages />
          {/* <Categories /> */}
        </AppStyle>
      </ApolloProvider>
    );
  }
}

export default App;
