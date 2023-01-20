import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";


// Import Logo Image
import Logo from "../../assets/01-logos/logo-gray.png";


export default function Sidebar() {
  return (
    <div className="menu">
      <motion.aside
        initial={{ width: "0vw" }}
        animate={{ width: "10vw" }}>
        <div className="container">
        <ul className="flex flex-col w-full">
        <li className="my-px">
          <Link className="nav-link active" to="/dashboard">
                  Dashboard
          </Link>
        </li>
        <li className="my-px">
          <Link className="nav-link active" to="/harbor">
                  Harbor
          </Link>
        </li>
        <li className="my-px">
          <Link className="nav-link active" to="/gallery">
                  Gallery
          </Link>
        </li>
        <li className="my-px">
          <Link className="nav-link active" to="/battle">
                  Battle
          </Link>
        </li>
        {/* Make this disappear upong login */}
        <li className="my-px">
          <Link className="nav-link active" to="/login">
                  Login
          </Link>
        </li>
        <li className="my-px">
          <Link className="nav-link active" to="/signup">
                  Sign up
          </Link>
        </li>
      </ul>
        </div>
      </motion.aside>
      <div className="btn-container">
        <button>Close</button>
      </div>
      </div>
  );
}
