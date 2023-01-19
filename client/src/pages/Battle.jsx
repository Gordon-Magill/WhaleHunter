import React from "react";
import { battle } from "../components/battle"
import { motion } from "framer-motion";
// import user's ship as attacker
// import random monster as defender

// Test whale picture
import whaleBossPic from "../assets/cthulhu_whales/tmp3k8jgtcj.png"
import playerShipPic from "../assets/old_ships/tmpa1uksn_p.png"


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
        <div className="player">
          <div className="playerShipPic">
            <img src={playerShipPic}/>
          </div>
        </div>
        <div className="enemy">
          <div className="whaleBossPic">
            <img src={whaleBossPic}/>
          </div>
        </div>
          <div className="actionArea">
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
