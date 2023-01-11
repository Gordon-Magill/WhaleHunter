const { Schema, model } = require("mongoose");
const statsSchema = require("./Stats");

const userItemSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      default: null,
    },
    stats: statsSchema,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = userItemSchema;
