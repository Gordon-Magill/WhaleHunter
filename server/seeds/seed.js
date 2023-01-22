// Add seeds for starter items, ship types, monsters, etc. to allow the game to run
const db = require("../config/connection");
const { Item, Ship, Monster, Icon } = require("../models");
const fs = require("fs");
const path = require("path");

// Importing raw data from JSON
const itemsData = require("./itemsData.json");
const monstersData = require("./monstersData.json");
const shipsData = require("./shipsData.json");
// const iconData = require("./iconData.json");
// console.log(iconData);

db.once("open", async () => {
  // Clear out existing data
  console.log("Deleting existing db data...");
  await Item.deleteMany({});
  await Ship.deleteMany({});
  await Monster.deleteMany({});
  await Icon.deleteMany({});
  console.log("Existing db data deleted!");

  console.log("Seeding new data to db...");

  const items = await Item.insertMany(itemsData);
  console.log("Items seeded!");

  const ships = await Ship.insertMany(shipsData);
  console.log("Ships seeded!");

  const monsters = await Monster.insertMany(monstersData);
  console.log("Monsters seeded!");

  function getFileNames(directory) {
    let files = fs.readdirSync(directory);
    return files;
  }

  function seedImages() {
    const cthulhuWhaleImages = getFileNames(
      "../client/src/assets/cthulhu_whales"
    );
    // const fireWhaleImages = getFileNames("../client/src/assets/fire_whales");
    // const kaijuWhaleImages = getFileNames("../client/src/assets/kaiju_whales");
    // const undeadWhaleImages = getFileNames(
    //   "../client/src/assets/undead_whales"
    // );
    // const oldShipImages = getFileNames("../client/src/assets/old_ships");
    // const modernShipImages = getFileNames("../client/src/assets/modern_ships");
    // const futureShipImages = getFileNames("../client/src/assets/future_ships");

    const whaleObjects = cthulhuWhaleImages.map((filename) => {
      const obj = {
        objectType: "whale",
        img: {
          data: fs.readFileSync(
            path.join(
              __dirname,
              "../../client/src/assets/cthulhu_whales",
              filename
            )
          ),
          contentType: "image/png",
        },
      };

      return obj;
      // console.log(obj);
    });

    return whaleObjects;

    // console.log("Whale objects: ", whaleObjects);
    // const writeWhaleImages = await Icon.insertMany(whaleObjects);
    // console.log("Images seeded!");
  }

  // whaleObjects = seedImages();

  // *****************************
  // THIS WORKS FOR A SINGLE WHALE
  // const singleWhaleArray = [
  //   {
  //     objectType: "whale",
  //     img: {
  //       data: fs.readFileSync(
  //         path.join(
  //           __dirname,
  //           "../../client/src/assets/cthulhu_whales",
  //           "tmp_39sggek.png"
  //         )
  //       ),
  //       contentType: "image/png",
  //     },
  //   },
  // ]
  // console.log("singleWhaleArray: ",singleWhaleArray)
  // const writeWhaleImages = await Icon.insertMany(singleWhaleArray);
  // *****************************

  // *****************************
  // MULTIPLE WHALES
  const multWhales = seedImages()
  console.log(multWhales)
  const writeWhaleImages = await Icon.insertMany(multWhales);

  console.log("Done seeding content.");

  process.exit(0);
});
