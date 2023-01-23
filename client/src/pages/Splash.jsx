import React from "react";

// Image carousel for home banner

// Images from assets
import One from '../assets/old_ships/old_1.png';
import Two from '../assets/cthulhu_whales/cthulhu_1.png';
import Three from '../assets/modern_ships/modern_1.png';
import Four from '../assets/fire_whales/fire_1.png';

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'


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
        <h1>Space Grift: Whale Hunter</h1>
    </div>
    </motion.div>
  );
}
