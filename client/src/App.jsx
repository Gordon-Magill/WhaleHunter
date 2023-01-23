import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";

// Import pages
import AnimatedRoutes from "./pages/page-components/AnimatedRoutes";
import Sidebar from "./pages/page-components/Sidebar";
import Header from "./pages/page-components/Header";
import Footer from "./pages/page-components/Footer";

// Provider for user (and all their inventory) state
import { UserProvider } from "./utils/userContext";

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
      <UserProvider>
        <Router>
          <div className="w-screen flex min-h-screen bg-gray-100 text-gray-800">
            <Sidebar></Sidebar>
            <main className="main flex flex-col flex-grow transition-all duration-150 ease-in">
              <div className="justify-center main-content flex flex-col flex-grow">
                <AnimatedRoutes />
              </div>
              <Footer></Footer>
            </main>
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
