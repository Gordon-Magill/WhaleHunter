import React from "react";
import { motion } from "framer-motion";
import {TRANSITION_SPEED} from '../utils/transitionSpeed'




// Test whale picture
import whaleBossPic from "../assets/cthulhu_whales/tmp3k8jgtcj.png"
// Test player picture
import playerShipPic from "../assets/old_ships/tmpa1uksn_p.png"
// Test HP Value for PLayer
const playerHP = atkCurrentHp;
const bossHP = defCurrentHp;



// // Here begins the battle script

var battleState = 0
var atkCurrentHp
var atkCurrentArmor
var atkCurrentShield
var defCurrentHp
var defCurrentArmor
var defCurrentShield
var roundCounter = 0;
var battleMsgOne
var battleMsgTwo


function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function diceRoll(modifier){
    // 3d6 roll. modifier argument is added or subtracted from roll to decrease or increase difficulty. higher roll = better
    // todo: implement critical failure and success (match 3 and 18)
    let roll = getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + modifier
    return roll
}

const updateMsg = (int) => {
  if(int === 1){document.getElementById('msgOne').innerHTML = battleMsgOne}
  else if(int === 2){document.getElementById('msgTwo').innerHTML = battleMsgTwo}
}

// this function manages a half round of battle where damage is dealt
function round([atkPower, defHp, defArmor, defShield]){
    console.log("Round function called")
    console.log(`Attack power ${atkPower} hitting ${defHp} hp, ${defArmor} armor, ${defShield} shield`)
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
    console.log(`${defHp} hp, ${defArmor} armor, ${defShield} shield`)
    return [defHp, defArmor, defShield]
}


// initialize the battle state, get values for attacker and defender, wrap other functions in this function
function startBattle(attacker, defender){
    if(battleState === 0){
      battleMsgOne = ""
      battleMsgTwo = ""

      console.log(`Battle state initiated! ${attacker.name} vs ${defender.name}`)
      battleState = 1

      atkCurrentHp = attacker.healthCurrent
      atkCurrentArmor = attacker.armorCurrent
      atkCurrentShield = attacker.shieldCurrent

      defCurrentHp = defender.health
      defCurrentArmor = defender.armor
      defCurrentShield = defender.shield

      roundCounter = 1;
      battleMsgOne = "Battle commenced! Press 'Next Round' to continue."
      updateMsg(1)
      // nextRound(attacker, defender);

    } else {
        console.log("Battle already initiated!")
    }
}

// if nextRound button is pressed call this function
function nextRound(attacker, defender) {

  // reset battle messages
  battleMsgOne = ""
  battleMsgTwo = ""
  updateMsg(1)
  updateMsg(2)
  // Render Round number to page
  let currentRound = roundCounter;
  let roundEle = document.getElementById('currentRound');
  roundEle.innerHTML = 'Round: ' + currentRound;

    if(atkCurrentHp >= 1 && defCurrentHp >= 1){

      // roll accuracy vs evasion to determine hit or miss
      if(diceRoll(attacker.accuracy) > diceRoll(defender.evasion)){

        let roundResult = round([attacker.attackPower, defCurrentHp, defCurrentArmor, defCurrentShield])

        // update values
        defCurrentHp = roundResult[0]
        defCurrentArmor = roundResult[1]
        defCurrentShield = roundResult[2]

        // check defender hp
        if(defCurrentHp < 1){
            // defender has been defeated
            battleMsgOne = `You defeated ${defender.name}!`
            updateMsg(1)
            console.log(battleMsgOne)
            // end battle state

            endBattle("win")
            return
        }

        battleMsgOne = `${attacker.name} damaged ${defender.name}!`
        updateMsg(1)
        console.log(battleMsgOne)

    } else {
        // it's a miss!
        battleMsgOne = `${attacker.name} missed ${defender.name}...`
        updateMsg(1)
        console.log(battleMsgOne)
    }

    if(diceRoll(defender.accuracy) > diceRoll(attacker.evasion)){

        let roundResult = round([defender.attackPower, atkCurrentHp, atkCurrentArmor, atkCurrentShield])

        // update values
        atkCurrentHp = roundResult[0]
        atkCurrentArmor = roundResult[1]
        atkCurrentShield = roundResult[2]

        // check attacker hp
        if(atkCurrentHp < 1){
            // attacker has been defeated
            battleMsgTwo = `You were defeated...`
            console.log(battleMsgTwo)
            // end battle state
            endBattle("lose")
            return
        }

      battleMsgTwo = `${defender.name} damaged ${attacker.name}!`
      updateMsg(2)
        console.log(battleMsgTwo)

    } else {
        // it's a miss!
      battleMsgTwo = `${defender.name} missed ${attacker.name}...`
      updateMsg(2)
      console.log(battleMsgTwo)

    }

    // return some data to the page

      roundCounter++
      console.log('Round: ' + roundCounter)

    console.log(`Round results: attacker has ${atkCurrentHp} hp, defender has ${defCurrentHp} hp`)
  }
  // Append final text to the page element
}

    // if retreat button is pressed call this function
function retreat(){
    // end battle state
    if(battleState === 1)
        endBattle("lose")
}

function endBattle(outcome){
    console.log("Battle state ended!")
    battleState = 0
    if(outcome === "win"){



    } else if(outcome === "lose"){



    } else {
      console.log("Error in battle outcome")
    }
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
  evasion: 21
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
              className="bg-gray-400">{playerHP}HP</motion.div>
          </div>
        </div>

        <div className="actionArea">
          <div className="actionText">
            <p id ="currentRound"></p>
            <p id="msgOne"
            // Text to reflect what just happened to attacker
              className="bg-gray-200"></p>
            <p id="msgTwo"
               // Text to reflect what just happened to defender
              className="bg-gray-200"></p>
          </div>
            <button
            // battle(attacker, defender)
            onClick={() => startBattle(attacker, defender)}>Start battle</button>
          <button
            onClick={() => nextRound(attacker, defender)}>Next Round</button>
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
              className="bg-gray-400">{bossHP}HP</motion.div>
          </div>
        </div>

    </div>
      </motion.div>
  );
}
