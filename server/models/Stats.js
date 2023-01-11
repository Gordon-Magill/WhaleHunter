const { Schema, model } = require("mongoose");

const statsSchema = new Schema(
  {
    attackPower: {
      type: Number,
      default: 0,
    },
    health: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Stats = model("Stats", statsSchema);

module.exports = Stats;
