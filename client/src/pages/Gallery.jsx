import React from "react";

import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'

// List of monster objects
import MonsterList from "./page-components/MonsterList";

// TODO: Query the user's ship
// TODO: Query all of user's successfull conquests (monsters)

export default function Gallery() {
  return (
    <motion.div
    className="bg-[url('/page_backgrounds/~captain_cabin.png')] bg-cover h-[100vh] flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: TRANSITION_SPEED }}
  >
    <div className="gallery bg-slate-800/50 p-5 text-white rounded-lg text-center">
        <h1>The Gallery</h1>

      </div>
      </motion.div>
  );
}
