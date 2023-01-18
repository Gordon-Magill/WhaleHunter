import React from "react";
import { battle } from "../components/battle"
import { motion } from "framer-motion";
// import user's ship as attacker
// import random monster as defender


export default function Battle() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .5 }}
  >
    <div className="battleSection">
      <h1>FIGHT!!!</h1>
      <div>
        <button
          // battle(attacker, defender)
          onClick={() => battle()}
          >Start battle
        </button>

        <button
          >Next Round
        </button>

        <button
          >Retreat!
        </button>
      </div>
      </div>
      </motion.div>
  );
}
