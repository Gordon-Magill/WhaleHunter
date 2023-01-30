import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";
import { TRANSITION_SPEED } from "../utils/transitionSpeed";

// List of monster objects
import MonsterList from "./page-components/MonsterList";

export default function Dashboard() {
  const [loginState, loginStateSetter] = useState(false);
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);

  useEffect(() => {
    loginStateSetter(Auth.checkLoggedIn());
  }, []);

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <div className="dashboard flex flex-col items-center w-1/2">
        <h1>Your Dashboard</h1>
        <h2>The Bosses</h2>
        <MonsterList className=""/>
      </div>
    </motion.div>
  );
}
