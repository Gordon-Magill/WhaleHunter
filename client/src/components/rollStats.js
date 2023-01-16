// randomly generate stats for a ship, monster, or part

function getRandomInt(num, min) {
    return Math.floor(Math.random() * num) + min;
}

function GenerateStats(type){
    // types: 0 = ship, 1 = monster, 2 = part

    if(type === 0){
        // generate values for all 7 stats

        let shipResult = {
            "attackPower" : getRandomInt(10, 1),
            "health" : getRandomInt(15, 5),
            "armor" : getRandomInt(10, 2),
            "shield" : getRandomInt(20, 4),
            "accuracy" : getRandomInt(25, 5),
            "initiative" : getRandomInt(15, 1),
            "evasion" : getRandomInt(25, 5)
        }

        return shipResult

    } else if(type === 1){

        let monsterResult = {
            "attackPower" : getRandomInt(10, 1),
            "health" : getRandomInt(50, 10),
            "armor" : getRandomInt(5, 0),
            "shield" : 0,
            "accuracy" : getRandomInt(25, 5),
            "initiative" : getRandomInt(15, 1),
            "evasion" : getRandomInt(10, 1)
        }
        
        return monsterResult

    } else if(type === 2){
     
        // generate values for 1 stat
        // that stat will determine the part type

        let partResult = {
            "Part Type" : getRandomInt(6, 0),
            "Stat Bonus" : getRandomInt(5, 1),
        }

        return partResult

    } else {
        console.log("Bad argument passed to GenerateStats function!")
        return
    }
}

module.exports = GenerateStats
