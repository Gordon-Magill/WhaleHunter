import React from "react";

// Image carousel for home banner

// Import Logo Image
import Logo from "../assets/01-logos/logo-full-color.png";

import { motion } from "framer-motion";
import { TRANSITION_SPEED } from "../utils/transitionSpeed";

import { Link, useNavigate } from "react-router-dom";

import {
  useUserStateContext,
  useUserDispatchContext,
} from "../utils/userContext";

export default function Splash() {
  const userState = useUserStateContext();
  const userDispatch = useUserDispatchContext();

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <div className="">
        <img
          className="flex align-center justify-center w-[60vw] m-auto"
          src={Logo}
        />
      </div>
      <div>
        <p className="m-5">
          An over the top parody game that gratiutously combines AI image
          generation while flaying the concept of NFT's alive.
        </p>
      </div>
      <div className="flex justify-around">
        {userState.userInfo.username !== null ? null : (
          <>
            <Link
              className="bg-teal-600 p-5 rounded nav-link active font-bold text-lg text-white "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="bg-teal-600 p-5 rounded first-letter:nav-link active font-bold text-lg text-white"
              to="/signup"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
}
