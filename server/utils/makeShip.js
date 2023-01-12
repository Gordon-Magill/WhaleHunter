const GenerateStats = require("./rollStats")

// calling this function with argument 0 generates stats for a ship object
const statValues = GenerateStats(0)

const NewShip = class Ship {
    constructor(){
        this.name = "Placeholder Name"
        this.attackPower = statValues["attackPower"]
        this.health = statValues["health"]
        this.armor = statValues["armor"]
        this.shield = statValues["shield"]
        this.accuracy = statValues["accuracy"]
        this.initiative = statValues["initiative"]
        this.evasion = statValues["evasion"]
    }
}

module.exports = NewShip
