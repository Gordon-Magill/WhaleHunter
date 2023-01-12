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
    
    // Icon will just be a reference to a file name in the src/assets
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

module.exports = userItemSchema;
