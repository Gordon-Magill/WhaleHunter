// Add seeds for starter items, ship types, monsters, etc. to allow the game to run
const db = require("../config/connection");
const { Item, Ship, Monster } = require("../models");

// Importing raw data from JSON
const itemsData = require("./itemsData.json");
const monstersData = require("./monstersData.json");
const shipsData = require("./shipsData.json");

db.once("open", async () => {
  // Clear out existing data
  await Item.deleteMany({});
  await Ship.deleteMany({});
  await Monster.deleteMany({});

  const items = await Item.insertMany(itemsData);
  console.log("Items seeded!");

  const ships = await Ship.insertMany(shipsData);
  console.log("Ships seeded!");
  
  const monsters = await Monster.insertMany(monstersData);
  console.log("Monsters seeded!");
  

  process.exit(0);
});
