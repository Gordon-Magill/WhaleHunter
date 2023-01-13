const { Schema, model } = require("mongoose");
const statsSchema = require("./Stats");

const itemSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      default: null,
    },
    stats: statsSchema,
    
    // Icon will just be a reference to a file name in client/src/assets
    icon: {
      type: String,
      required: true,
      default: null
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = {itemSchema};
