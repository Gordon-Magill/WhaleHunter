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
    initiative: {
      type: Number,
      required: true,
      default: 1,
    },
    evasion: {
      type: Number,
      required: true,
      default: 1,
    },
    imageID: {
      type: String,
      required: true,
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
