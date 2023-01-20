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

    // clone values that will decrement as the battle goes on
    let atkCurrentHp = attacker.healthCurrent
    let atkCurrentArmor = attacker.armorCurrent
    let atkCurrentShield = attacker.shieldCurrent

    let defCurrentHp = defender.health
    let defCurrentArmor = defender.armor
    let defCurrentShield = defender.shield

    let roundCounter = 1

    // if nextRound button is pressed call this function
    function nextRound(){
            
        if(atkCurrentHp > 1 && defCurrentHp > 1){
        // await user input for "Next Round" or "Retreat"
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
            }

        } else {
            // it's a miss!
        }
        
        // return some data to the page
        roundCounter++
 
        }
    }

    // if retreat button is pressed call this function
    function retreat(){
        // end battle state
        // save attacker hp values to current hp in db
        // or don't, this is less important right now
    }
}