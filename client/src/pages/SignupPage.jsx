import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import { motion } from "framer-motion";

export default function LoginPage() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "", username:""});
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);
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
      const { data } = await addUser({
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
      transition={{ duration: .5 }}
    >
    <div className="loginPage container">
      <h1 className="m-1">This is the signup page!</h1>
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
            type="text"
            name="username"
            className="w-full m-1 rounded-md"
            placeholder="Username"
            onChange={handleInputChange}
            value={userFormData.username}
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
          <button type="submit" className="m-1">
            Create account
          </button>
        </div>
      </form>
      </div>
      </motion.div>
  );
}
