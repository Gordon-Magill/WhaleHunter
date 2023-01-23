// Add seeds for starter items, ship types, monsters, etc. to allow the game to run
const db = require("../config/connection");
const { Ship, Monster } = require("../models");
const fs = require("fs");
const path = require("path");

// Importing raw data from JSON
const monstersData = require("./monstersData.json");
const shipsData = require("./shipsData.json");

db.once("open", async () => {
  // Clear out existing data
  console.log("Deleting existing db data...");
  await Ship.deleteMany({});
  await Monster.deleteMany({});
  console.log("Existing db data deleted!");

  console.log("Seeding new data to db...");

  const ships = await Ship.insertMany(shipsData);
  console.log("Ships seeded!");

  const monsters = await Monster.insertMany(monstersData);
  console.log("Monsters seeded!");

  console.log("Done seeding content.");

  process.exit(0);
});
