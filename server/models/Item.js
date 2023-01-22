const { Schema, model } = require("mongoose");
const statsSchema = require("./Stats");

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
    stats: statsSchema,
    // Icon will just be a reference to a file name in client/src/assets
    icon: {
      type: String,
      default: null
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Item = model('Item',itemSchema)

module.exports = {Item,itemSchema};
