const { Schema, model } = require("mongoose");
// const statsSchema = require("./Stats");

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: null,
    },
    description: {
      type: String,
      required: true,
      default: null,
    },
    // Icon will just be a reference to a file name in client/src/assets
    icon: {
      type: String,
      default: null
    },
    attackPower: {
      type: Number,
      required: true,
      default: 1,
    },
    health: {
      type: Number,
      required: true,
      default: 1,
    },
    armor: {
      type: Number,
      required: true,
      default: 1,
    },
    shield: {
      type: Number,
      required: true,
      default: 1,
    },
    accuracy: {
      type: Number,
      required: true,
      default: 1,
    },
    evasion: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Item = model('Item',itemSchema)

module.exports = {Item,itemSchema};
