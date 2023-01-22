import React from "react";
import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'

// Test whale picture
import whaleBossPic from "../assets/cthulhu_whales/tmp3k8jgtcj.png"
// Test player picture
import playerShipPic from "../assets/old_ships/tmpa1uksn_p.png"
// Test HP Value for PLayer
const playerHP = 50;
const bossHP = 75;



// // Here begins the battle script


var battleState = 0
var atkCurrentHp
var atkCurrentArmor
var atkCurrentShield
var defCurrentHp
var defCurrentArmor
var defCurrentShield
var roundCounter
var battleMsgOne = ""
var battleMsgTwo = ""


function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}


function diceRoll(modifier){
    // 3d6 roll. modifier argument is added or subtracted from roll to decrease or increase difficulty. higher roll = better
    // todo: implement critical failure and success (match 3 and 18)
    let roll = getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + modifier
    return roll
}


// this function manages a half round of battle where damage is dealt
function round([atkPower, defHp, defArmor, defShield]){

    let remainingPower = atkPower

    // hit shield first
    if(defShield > 0){

        // this will be negative if defShield > atkPower, meaning no damage will get through the shield this turn
        remainingPower = atkPower - defShield

        defShield = defShield - atkPower

        // if decreased below 0, set to 0
        if(defShield < 0){defShield = 0}
    }

    // hit armor+hp with damage mitigation if armor > 0
    if(remainingPower > 0){
        if(defArmor > 0){
            let armor = defArmor
            defArmor = defArmor - (Math.floor(remainingPower/2))
            defHp = defHp - (Math.floor(remainingPower/4))
            remainingPower = remainingPower - armor
        }
    }

    if(remainingPower > 0){
        if(defHp > 0){
            defHp = defHp - remainingPower
        }
    }
    
    return [defHp, defArmor, defShield]
}
 

// initialize the battle state, get values for attacker and defender, wrap other functions in this function
export function battle(attacker, defender){
    if(battleState === 0){
        console.log("Battle state initiated! " + attacker.name + " vs " + defender.name)
        battleState = 1

        atkCurrentHp = attacker.healthCurrent
        atkCurrentArmor = attacker.armorCurrent
        atkCurrentShield = attacker.shieldCurrent

        defCurrentHp = defender.health
        defCurrentArmor = defender.armor
        defCurrentShield = defender.shield

        roundCounter = 1

        // what should this return??

    } else {
        console.log("Battle already initiated!")
    }
}

// if nextRound button is pressed call this function
export function nextRound(attacker, defender){
        console.log("Next round called!")

        if(atkCurrentHp > 1 && defCurrentHp > 1){
        // roll accuracy vs evasion to determine hit or miss
        if(diceRoll(attacker.accuracy) > diceRoll(defender.evasion)){

            let roundResult = round([attacker.attackPower, defCurrentHp, defCurrentArmor, defCurrentShield])

            // update values
            defCurrentHp = roundResult[1]
            defCurrentArmor = roundResult[2]
            defCurrentShield = roundResult[3]

            // check defender hp
            if(defCurrentHp < 1){
                // defender has been defeated
                // end battle state
                endBattle()
            }

        } else {
            // it's a miss!
        }

        if(diceRoll(defender.accuracy) > diceRoll(attacker.evasion)){
            
            let roundResult = round([defender.attackPower, atkCurrentHp, atkCurrentArmor, atkCurrentShield])

            // update values
            atkCurrentHp = roundResult[1]
            atkCurrentArmor = roundResult[2]
            atkCurrentShield = roundResult[3]

            // check attacker hp
            if(atkCurrentHp < 1){
                // attacker has been defeated
                // end battle state
                endBattle()
            }

        } else {
            // it's a miss!
        }
        
        // return some data to the page
        roundCounter++
 
        }
    }

    // if retreat button is pressed call this function
export function retreat(attacker){
        // end battle state
        endBattle(attacker)
        // save attacker hp values to current hp in db
        // or don't, this is less important right now
}

function endBattle(attacker){
    console.log("Battle state ended!")
    battleState = 0
}

// // Here ends the battle script




//debug attacker and defender

var attacker = {
  name: 'Debug Ship',
  imageID: null,
  attackPower: 4,
  health: 14,
  healthCurrent: 14,
  armor: 5,
  armorCurrent: 5,
  shield: 5,
  shieldCurrent: 5,
  accuracy: 29,
  initiative: 3,
  evasion: 23
}

const defender = {
  name: 'Debug Monster',
  imageID: null,
  attackPower: 4,
  health: 19,
  armor: 3,
  shield: 0,
  accuracy: 21,
  initiative: 15,
  evasion: 5
}

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
            onClick={() => battle(attacker, defender)}>Start battle</button>
          <button
            onClick={() => nextRound(attacker, defender)}>Next Round</button>
          <button
            onClick={() => retreat(attacker)}>Retreat!</button>
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
