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
    const fireWhaleImages = getFileNames("../client/src/assets/fire_whales");
    const kaijuWhaleImages = getFileNames("../client/src/assets/kaiju_whales");
    const undeadWhaleImages = getFileNames(
      "../client/src/assets/undead_whales"
    );
    const oldShipImages = getFileNames("../client/src/assets/old_ships");
    const modernShipImages = getFileNames("../client/src/assets/modern_ships");
    const futureShipImages = getFileNames("../client/src/assets/future_ships");

    function createIconObj(imgDir, filenames, type) {
      console.log("createIconObj called with args: ", imgDir, filenames, type);
      const outputObjs = filenames.map((filename) => {
        const obj = {
          objectType: type,
          img: {
            data: fs.readFileSync(path.join(__dirname, imgDir, filename)),
            contentType: "image/png",
          },
        };
        return obj;
      });
      return outputObjs;
    }

    const cthulhuWhales = createIconObj(
      "../../client/src/assets/cthulhu_whales",
      cthulhuWhaleImages,
      "whale"
    );
    const fireWhales = createIconObj(
      "../../client/src/assets/fire_whales",
      fireWhaleImages,
      "whale"
    );
    const kaijuWhales = createIconObj(
      "../../client/src/assets/kaiju_whales",
      kaijuWhaleImages,
      "whale"
    );
    const undeadWhales = createIconObj(
      "../../client/src/assets/undead_whales",
      undeadWhaleImages,
      "whale"
    );

    const oldShips = createIconObj(
      "../../client/src/assets/old_ships",
      oldShipImages,
      "ship"
    );
    const modernShips = createIconObj(
      "../../client/src/assets/modern_ships",
      modernShipImages,
      "ship"
    );
    const futureShips = createIconObj(
      "../../client/src/assets/future_ships",
      futureShipImages,
      "ship"
    );
    // console.log("cthulhuWhales: ",cthulhuWhales)

    // const cthulhuWhales = cthulhuWhaleImages.map((filename) => {
    //   const obj = {
    //     objectType: "whale",
    //     img: {
    //       data: fs.readFileSync(
    //         path.join(
    //           __dirname,
    //           "../../client/src/assets/cthulhu_whales",
    //           filename
    //         )
    //       ),
    //       contentType: "image/png",
    //     },
    //   };
    //   return obj;
    // });

    return [cthulhuWhales, fireWhales, kaijuWhales, undeadWhales, oldShips, modernShips, futureShips];
  }
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
  const [cthulhuWhales, fireWhales, kaijuWhales, undeadWhales, oldShips, modernShips, futureShips] = seedImages();
  // console.log(multWhales);
  const write_cthulhuWhales = await Icon.insertMany(cthulhuWhales);
  const write_fireWhales = await Icon.insertMany(fireWhales);
  const write_kaijuWhales = await Icon.insertMany(kaijuWhales);
  const write_undeadWhales = await Icon.insertMany(undeadWhales);
  const write_oldShips = await Icon.insertMany(oldShips);
  const write_modernShips = await Icon.insertMany(modernShips);
  const write_futureShips = await Icon.insertMany(futureShips);


  console.log("Done seeding content.");

  process.exit(0);
});
