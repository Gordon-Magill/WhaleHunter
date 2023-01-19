import React from "react";

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'


export default function Harbor() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: TRANSITION_SPEED }}
  >
    <div className="harbor">
          <h1>The Harbor</h1>
          <p>Buy Stuff!</p>
      </div>
      </motion.div>
  );
}
