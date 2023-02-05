// Importing React relevant state and context
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useUserStateContext,
  useUserDispatchContext,
} from "../utils/userContext";

// Importing page transition content
import { motion } from "framer-motion";
import { TRANSITION_SPEED } from "../utils/transitionSpeed";

// Selectors for HP bar ID
const playerHpBar = document.getElementById('playerHpBar');
const monsterHpBar = document.getElementById('monsterHpBar');

// Test whale picture
// import whaleBossPic from "../assets/undead_whales/undead_1.png";
// Test player picture
// import playerShipPic from "../assets/future_ships/future_1.png";
// Test HP Value for PLayer

// A generic class that can be a player or a monster

// // Here begins the battle script

// var battleState = 0;
// var atkCurrentHp;
// var atkCurrentArmor;
// var atkCurrentShield;
// var defCurrentHp;
// var defCurrentArmor;
// var defCurrentShield;
// var roundCounter = 0;
// var battleMsgOne;
// var battleMsgTwo;

// var playerHP = 100;
// var monsterHP = 100;


// function getRandomInt(num) {
//   return Math.floor(Math.random() * num);
// }

// function diceRoll(modifier) {
//   // 3d6 roll. modifier argument is added or subtracted from roll to decrease or increase difficulty. higher roll = better
//   // todo: implement critical failure and success (match 3 and 18)
//   let roll = getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + modifier;
//   return roll;
// }

// const updateMsg = (int) => {
//   if (int === 1) {
//     document.getElementById("msgOne").innerHTML = battleMsgOne;
//   } else if (int === 2) {
//     document.getElementById("msgTwo").innerHTML = battleMsgTwo;
//   }
// };

// // this function manages a half round of battle where damage is dealt
// function round([atkPower, defHp, defArmor, defShield]) {
//   console.log("Round function called");
//   console.log(
//     `Attack power ${atkPower} hitting ${defHp} hp, ${defArmor} armor, ${defShield} shield`
//   );
//   let remainingPower = atkPower;

//   // hit shield first
//   if (defShield > 0) {
//     // this will be negative if defShield > atkPower, meaning no damage will get through the shield this turn
//     remainingPower = atkPower - defShield;

//     defShield = defShield - atkPower;

//     // if decreased below 0, set to 0
//     if (defShield < 0) {
//       defShield = 0;
//     }
//   }

//   // hit armor+hp with damage mitigation if armor > 0
//   if (remainingPower > 0) {
//     if (defArmor > 0) {
//       let armor = defArmor;
//       defArmor = defArmor - Math.floor(remainingPower / 2);
//       defHp = defHp - Math.floor(remainingPower / 4);
//       remainingPower = remainingPower - armor;
//     }
//   }

//   if (remainingPower > 0) {
//     if (defHp > 0) {
//       defHp = defHp - remainingPower;
//     }
//   }
//   console.log(`${defHp} hp, ${defArmor} armor, ${defShield} shield`);
//   return [defHp, defArmor, defShield];
// }

// // initialize the battle state, get values for attacker and defender, wrap other functions in this function
// function startBattle(attacker, defender) {
//   if (battleState === 0) {
//     battleMsgOne = "";
//     battleMsgTwo = "";

//     console.log(`Battle state initiated! ${attacker.name} vs ${defender.name}`);
//     battleState = 1;

//     atkCurrentHp = attacker.healthCurrent;
//     atkCurrentArmor = attacker.armorCurrent;
//     atkCurrentShield = attacker.shieldCurrent;

//     defCurrentHp = defender.health;
//     defCurrentArmor = defender.armor;
//     defCurrentShield = defender.shield;

//     roundCounter = 1;
//     battleMsgOne = "Battle commenced! Press 'Next Round' to continue.";
//     updateMsg(1);
//     // nextRound(attacker, defender);
//   } else {
//     console.log("Battle already initiated!");
//   }
// }

// // if nextRound button is pressed call this function
// function nextRound(attacker, defender) {
//   // reset battle messages
//   battleMsgOne = "";
//   battleMsgTwo = "";
//   updateMsg(1);
//   updateMsg(2);
//   // Render Round number to page
//   let currentRound = roundCounter;
//   let roundEle = document.getElementById("currentRound");
//   roundEle.innerHTML = "Round: " + currentRound;

//   if (atkCurrentHp >= 1 && defCurrentHp >= 1) {
//     // roll accuracy vs evasion to determine hit or miss
//     if (diceRoll(attacker.accuracy) > diceRoll(defender.evasion)) {
//       let roundResult = round([
//         attacker.attackPower,
//         defCurrentHp,
//         defCurrentArmor,
//         defCurrentShield,
//       ]);

//       // update values
//       defCurrentHp = roundResult[0];
//       defCurrentArmor = roundResult[1];
//       defCurrentShield = roundResult[2];

//       // check defender hp
//       if (defCurrentHp < 1) {
//         // defender has been defeated
//         battleMsgOne = `You defeated ${defender.name}!`;
//         updateMsg(1);
//         console.log(battleMsgOne);
//         // end battle state

//         endBattle("win");
//         return;
//       }

//       battleMsgOne = `${attacker.name} damaged ${defender.name}!`;
//       updateMsg(1);
//       console.log(battleMsgOne);
//     } else {
//       // it's a miss!
//       battleMsgOne = `${attacker.name} missed ${defender.name}...`;
//       updateMsg(1);
//       console.log(battleMsgOne);
//     }

//     if (diceRoll(defender.accuracy) > diceRoll(attacker.evasion)) {
//       let roundResult = round([
//         defender.attackPower,
//         atkCurrentHp,
//         atkCurrentArmor,
//         atkCurrentShield,
//       ]);

//       // update values
//       atkCurrentHp = roundResult[0];
//       atkCurrentArmor = roundResult[1];
//       atkCurrentShield = roundResult[2];

//       // check attacker hp
//       if (atkCurrentHp < 1) {
//         // attacker has been defeated
//         battleMsgTwo = `You were defeated...`;
//         console.log(battleMsgTwo);
//         // end battle state
//         endBattle("lose");
//         return;
//       }

//       battleMsgTwo = `${defender.name} damaged ${attacker.name}!`;
//       updateMsg(2);
//       console.log(battleMsgTwo);
//     } else {
//       // it's a miss!
//       battleMsgTwo = `${defender.name} missed ${attacker.name}...`;
//       updateMsg(2);
//       console.log(battleMsgTwo);
//     }

//     // return some data to the page

//     roundCounter++;
//     console.log("Round: " + roundCounter);

//     console.log(
//       `Round results: attacker has ${atkCurrentHp} hp, defender has ${defCurrentHp} hp`
//     );
//   }
//   // Append final text to the page element
// }

// if retreat button is pressed call this function
// function retreat() {
//   // end battle state
//   if (battleState === 1) endBattle("lose");
// }

// function endBattle(outcome) {
//   console.log("Battle state ended!");
//   battleState = 0;
//   if (outcome === "win") {
//   } else if (outcome === "lose") {
//   } else {
//     console.log("Error in battle outcome");
//   }
// }

// // Here ends the battle script

//debug attacker and defender

// var attacker = {
//   name: "Debug Ship",
//   imageID: null,
//   attackPower: 4,
//   health: 14,
//   healthCurrent: 14,
//   armor: 5,
//   armorCurrent: 5,
//   shield: 5,
//   shieldCurrent: 5,
//   accuracy: 29,
//   initiative: 3,
//   evasion: 21,
// };

// const defender = {
//   name: "Debug Monster",
//   imageID: null,
//   attackPower: 4,
//   health: 19,
//   armor: 3,
//   shield: 0,
//   accuracy: 21,
//   initiative: 15,
//   evasion: 5,
// };


class Combatant {
  constructor(obj) {
    console.log("Initiating Combatant with obj: ", obj);
    this.health = obj.health;
    this.attackPower = obj.attackPower;
    this.name = obj.name;
    this.imagePath = obj.imagePath;
  }

  attack(opponent) {
    opponent.health -= this.attackPower;
    if (opponent.health < 0) {
      opponent.health = 0;
    }
  }

  isAlive() {
    if (this.health > 0) {
      return true;
    }
    return false;
  }
}

// A handler for
class BattleClass {
  constructor(
    player,
    monster,
    playerSetter,
    monsterSetter,
    victoryStateSetter
  ) {
    this.player = player;
    this.monster = monster;
    this.victor = null;
    this.victoryStateSetter = victoryStateSetter;
    this.playerSetter = playerSetter;
    this.monsterSetter = monsterSetter;
  }

  executeRound() {
    if (this.victor !== null) {
      console.log("Battle is already over!");
      return;
    }

    console.log("Initiating a round of combat!");
    console.log("Player HP: ", this.player.health);
    console.log("Monster HP: ", this.monster.health);

    function hpBar() {



    }
    hpBar();

    // If the player is alive, attack
    if (this.player.isAlive()) {
      this.player.attack(this.monster);
      this.monsterSetter(this.monster);
    }

    // If the monster is still alive, attack, otherwise player wins
    if (this.monster.isAlive()) {
      this.monster.attack(this.player);
      this.playerSetter(this.player);
    } else {
      this.victor = this.player;
      this.endBattle();
    }

    // If the player died from the last attack, the monster wins
    if (!this.player.isAlive()) {
      this.victor = this.monster;
      this.endBattle();
    }
  }

  endBattle() {
    console.log(`Battle over! Winner is ${this.victor.name}!`);
    this.victoryStateSetter(this.victor);
    if (this.victor == this.player) {
      // Code for incrementing the user's experience on the db and in global state
    }
  }
}

export default function Battle() {
  // Get player's ship from global context
  const navigate = useNavigate();

  const playerShipInfo = useUserStateContext().userInfo.ship;
  console.log(playerShipInfo);
  const player = new Combatant(playerShipInfo);
  const [playerState, setPlayerState] = useState(player);

  // Get monster from global state, set by whatever monster was chosen on the dashboard
  const monsterObj = useUserStateContext().monsterPayLoad || {
    name: "Debug Monster",
    imageID: null,
    attackPower: 4,
    health: 19,
    armor: 3,
    shield: 0,
    accuracy: 21,
    initiative: 15,
    evasion: 5,
    imagePath: "/cthulhu_whales/cthulhu_2.png",
  };
  console.log("Got monster: ", useUserStateContext().monsterPayLoad);
  const monster = new Combatant(monsterObj);
  const [monsterState, setMonsterState] = useState(monster);

  // Create a framework for the battle to take place
  const [victoryState, victoryStateSetter] = useState(null);
  const battleObject = new BattleClass(
    playerState,
    monsterState,
    setPlayerState,
    setMonsterState,
    victoryStateSetter
  );



  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: TRANSITION_SPEED }}
    >
      {victoryState == null ? (
        <button
          onClick={() => battleObject.executeRound()}
          className="bg-black text-white"
        >
          Next Round
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="bg-black text-white"
        >
          Battle is over! Collect your prize!
        </button>
      )}



      <div className="flex flex-row justify-around items-center battleSection">
        <div className="player">
          <img src={playerState.imagePath} />
          <div className="relative">
            <motion.div
              initial={{ scaleX: "0%" }}
              animate={{ scaleX: `100%` }}
              className="my-3 rounded-lg text-white text-2xl bg-teal-600"
              id = "playerHpBar"
            >
              {playerState.health}HP
            </motion.div>
          </div>
        </div>
        <div className="actionArea">
          <div className="actionText">
            <p id="currentRound"></p>
            <p
              id="msgOne"
              // Text to reflect what just happened to attacker
              className="bg-gray-200"
            ></p>
            <p
              id="msgTwo"
              // Text to reflect what just happened to defender
              className="bg-gray-200"
            ></p>
          </div>

          {/* No need to start a battle in the refactored version */}
          {/* <button
            // battle(attacker, defender)
            onClick={() => startBattle(attacker, defender)}
          >
            Start battle
          </button> */}

          {/* Removing retreat functionality for now */}
          {/* <button onClick={() => retreat()}>Retreat!</button> */}
        </div>

        <div className="enemy">
          <img src={monsterState.imagePath} />
          <motion.div
            initial={{ scaleX: "0%" }}
            animate={{ scaleX: `100%` }}
            className="my-3 rounded-lg text-white text-2xl bg-teal-900"
            id = "monsterHpBar"
          >
            {monsterState.health}HP
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
