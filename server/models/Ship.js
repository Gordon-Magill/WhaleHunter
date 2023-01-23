const { Schema, model } = require("mongoose");

const shipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    healthCurrent: {
      type: Number,
      required: true,
      default: 1,
    },
    armor: {
      type: Number,
      required: true,
      default: 1,
    },
    armorCurrent: {
      type: Number,
      required: true,
      default: 1,
    },
    shield: {
      type: Number,
      required: true,
      default: 1,
    },
    shieldCurrent: {
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
    imagePath: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Ship = model('Ship', shipSchema)

module.exports = {
    Ship,
    shipSchema
}
