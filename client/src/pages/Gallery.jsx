import React from "react";

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'



// TODO: Query the user's ship
// TODO: Query all of user's successfull conquests (monsters)

export default function Gallery() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: TRANSITION_SPEED }}
  >
    <div className="gallery">
        <h1>The Gallery</h1>

      </div>
      </motion.div>
  );
}
