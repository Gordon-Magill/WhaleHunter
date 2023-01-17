import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";

export default function LoginPage() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [errorState, setErrorState] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);

  //   Update form state on changes to the form
  const handleInputChange = (event) => {
    console.log('handleInputChange event:', event)
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log("new userFormData is:", userFormData);
  };

  //   Log the user in
  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    console.log("handleFormSubmit event:", event);
    console.log("userFormData:", userFormData);

    try {
      const { data } = await login({
        variables: {
          ...userFormData,
        },
      });

      // console.log('login data.login.user.savedBooks:', data.login.user.savedBooks);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setErrorState(true);
    }

    // Wipe the form
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
    <div className="loginPage container">
      <h1 className="m-1">This is the login page!</h1>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-around ">
          <input
            type="email"
            name="email"
            className="w-full m-1 rounded-md"
            placeholder="Email"
            onChange={handleInputChange}
            value={userFormData.email}
          ></input>
          <input
            type="password"
            name="password"
            className="w-full m-1 rounded-md"
            placeholder="Password"
            onChange={handleInputChange}
            value={userFormData.password}
          ></input>
        </div>
        <div className="flex flex-row justify-around">
          <button type="submit" className="m-1 bg-blue-600">Log in</button>
          <button type="button" className="m-1 bg-slate-600">Forgot login?</button>
        </div>
        <button className="m-1 bg-green-500 text-lg" href='/'>Sign up here!</button>
      </form>
      </div>
      </motion.div>
  );
}
