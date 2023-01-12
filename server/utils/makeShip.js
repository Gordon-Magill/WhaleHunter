const GenerateStats = require("./rollStats")

// calling the function with argument 0 generates stats for a ship object
const statValues = GenerateStats(0)

//this is pseudocode for now
class Ship {
    constructor(stats){
        this.attackPower = stats.attackPower
        this.health = stats.health
        this.armor = stats.armor
        this.shield = stats.shield
        this.accuracy = stats.accuracy
        this.initiative = stats.initiative
        this.evasion = stats.evasion
    }
}
