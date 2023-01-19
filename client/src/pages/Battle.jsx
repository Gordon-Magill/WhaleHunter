import React from "react";
import { battle } from "../components/battle"
import { motion } from "framer-motion";
// import user's ship as attacker
// import random monster as defender

// Test whale picture
import whaleBossPic from "../assets/cthulhu_whales/tmp3k8jgtcj.png"
// Test player picture
import playerShipPic from "../assets/old_ships/tmpa1uksn_p.png"
// Test HP Value for PLayer
const playerHP = "50%";


export default function Battle() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .5 }}
  >
      <div
        // Section for player picture and stats
        className="flex battleSection">
        <div className="player">
          <div className="playerShipPic">
            <img src={playerShipPic}/>
          </div>
          <div
            // Player HP bar
            className="playerHP">
            <motion.div
              initial={{ scaleX: "0%" }}
              animate={{ scaleX: `${playerHP}` }}
              className="bg-gray-400">BOX</motion.div>
          </div>
        </div>

        <div className="actionArea">
          <div className="actionText">
            <p
            // Text to reflect what just happened
              className="bg-gray-200">Holy ship! That's a lot of damage!</p>
          </div>
            <button
            // battle(attacker, defender)
            onClick={() => battle()}>Start battle</button>
          <button>Next Round</button>
          <button>Retreat!</button>
        </div>

        <div
          // Section for player picture and stats
          className="enemy">
          <div className="whaleBossPic">
            <img src={whaleBossPic}/>
          </div>
          <div
            // Whale HP bar
            className="bossHp">
          </div>
        </div>

    </div>
      </motion.div>
  );
}
