import React from "react";

import { motion } from "framer-motion";

export default function Harbor() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
  >
    <div className="harbor">
          <h1>The Harbor</h1>
          <p>Buy Stuff!</p>
      </div>
      </motion.div>
  );
}
