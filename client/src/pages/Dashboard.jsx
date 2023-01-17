import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";

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
    transition={{ duration: .5 }}
  >
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      </div>
      </motion.div>
  );
}
