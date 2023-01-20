import React, { useState } from "react";


// Import stripe dependencies for payments
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { BrowserRouter as Router } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51MRp2ZFLfVZMTOvrx3sIHkAewtXlhPg1IJGWD8aSCLgkHUDoSrbOTlqh7VoMxP7RmVwiSndv8WiqPqVb9nnqMUbv00tSkYsURq');

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
  // Stripe options
  // TODO: Store Client secret server-side!
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="w-screen flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <Sidebar></Sidebar>
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
    <Header></Header>
      <div className="main-content flex flex-col flex-grow p-4">
       <AnimatedRoutes/>
          </div>
          <Footer></Footer>
    </main>
        </div>
        </Router>

    </ApolloProvider>
  );
}

export default App;
