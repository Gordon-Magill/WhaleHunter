import React from "react";

import { motion } from "framer-motion";
import { TRANSITION_SPEED } from "../utils/transitionSpeed";

export default function Harbor() {
  return (
    <motion.div
      className="container text-center bg-[url('/page_backgrounds/harbor/harbor_1.png')] bg-cover h-[80vh] w-[80vh] rounded-full flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      <div className="harbor bg-slate-800/50 w-fit p-2 rounded-lg text-white">
        <h1>The Harbor</h1>
        <button>
          <a href="https://buy.stripe.com/14k02B6YW3LNau4001" target="_blank" className="text-white">
            Buy a Repair Kit NOW!!!
          </a>
        </button>
      </div>
    </motion.div>
  );
}
