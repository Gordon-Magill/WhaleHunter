import React, { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import reactLogo from "./assets/react.svg";
import "./App.css";

// Import pages
import Page from "./pages/page-components/Page";


// Import Logo Image
import Logo from "./assets/01-logos/logo-gray.png";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Page></Page>

        </div>
    </ApolloProvider>
  );
}

export default App;
