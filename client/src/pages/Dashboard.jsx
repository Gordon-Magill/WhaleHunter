import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import MonsterList from './page-components/MonsterList';

// Import the query we are going to execute from its file
import { QUERY_MONSTERS} from '../utils/queries';

export default function Dashboard() {
  const [loginState, loginStateSetter] = useState(false);
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);

  useEffect(() => {
    loginStateSetter(Auth.checkLoggedIn());
  }, []);

    // Execute the query on component load
  const { loading, data } = useQuery(QUERY_MONSTERS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const monsters = data?.monsters || [];

  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: TRANSITION_SPEED }}
  >
    <div className="dashboard">
        <h1>Your Dashboard</h1>

        <h2>The Bosses</h2>
        {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MonsterList
              monsters={monsters}
              title="Fight the Whales!!!"
            />
          )}

    </div>
      </motion.div>
  );
}
