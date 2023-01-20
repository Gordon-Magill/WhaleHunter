import React from "react";
import { battle } from "../components/battle"
import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'

// Test whale picture
import whaleBossPic from "../assets/cthulhu_whales/tmp3k8jgtcj.png"
// Test player picture
import playerShipPic from "../assets/old_ships/tmpa1uksn_p.png"
// Test HP Value for PLayer
const playerHP = 50;
const bossHP = 75;


export default function Battle() {
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: TRANSITION_SPEED }}
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
              animate={{ scaleX: `${playerHP}%` }}
              className="bg-gray-400">{playerHP}%</motion.div>
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
          <button
            onClick={() => nextRound()}>Next Round</button>
          <button
            onClick={() => retreat()}>Retreat!</button>
        </div>

        <div
          // Section for player picture and stats
          className="enemy">
          <div className="whaleBossPic">
            <img src={whaleBossPic}/>
          </div>
          <div
            // Player HP bar
            className="bossHP">
            <motion.div
              initial={{ scaleX: "0%" }}
              animate={{ scaleX: `${bossHP}%` }}
              className="bg-gray-400">{bossHP}%</motion.div>
          </div>
        </div>

    </div>
      </motion.div>
  );
}
