import { GenerateStats } from "./rollStats.js"

// calling this function with argument 0 generates stats for a ship object
const statValues = GenerateStats(0)

export const NewShip = class Ship {
    constructor(){
        this.name = "Placeholder Name"
        this.imageID = null
        this.attackPower = statValues["attackPower"]
        this.health = statValues["health"]
        this.healthCurrent = this.health
        this.armor = statValues["armor"]
        this.armorCurrent = this.armor
        this.shield = statValues["shield"]
        this.shieldCurrent = this.shield
        this.accuracy = statValues["accuracy"]
        this.initiative = statValues["initiative"]
        this.evasion = statValues["evasion"]
    }
}
