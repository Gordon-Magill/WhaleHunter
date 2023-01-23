import React from "react";

// Image carousel for home banner

// Import Logo Image
import Logo  from "../assets/01-logos/logo-full-color.png";

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'

import { Link, useNavigate } from "react-router-dom";

const contentStyle = {
  width: "100%",
  height: "30rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  overflow: "hidden",
};

export default function Splash() {
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <div className="splash">
        <img src={Logo}/>
      </div>
      <div>
        <p className="m-5">An over the top parody game that gratiutously combines AI image generation while flaying the concept of NFT's alive.</p>
      </div>
      <div className="flex justify-around">
      <Link className="bg-teal-600 p-5 rounded nav-link active font-bold text-lg text-white " to="/login">
        Login
      </Link>
      <Link className="bg-teal-600 p-5 rounded first-letter:nav-link active font-bold text-lg text-white" to="/signup">
        Signup
      </Link>
      </div>
    </motion.div>
  );
}
