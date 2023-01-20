import { GenerateStats } from "./rollStats.js"

// calling this function with argument 1 generates stats for a monster object
const statValues = GenerateStats(1)

export const NewMonster = class Monster {
    constructor(){
        this.name = "Eldritch Star Whalebeast"
        this.imageID = null
        this.attackPower = statValues["attackPower"]
        this.health = statValues["health"]
        this.armor = statValues["armor"]
        this.shield = statValues["shield"]
        this.accuracy = statValues["accuracy"]
        this.initiative = statValues["initiative"]
        this.evasion = statValues["evasion"]
    }
}

console.log(new NewMonster)