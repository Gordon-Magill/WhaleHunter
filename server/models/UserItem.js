const { Schema, model } = require("mongoose");
const { Stats } = require("./Stats");

const userItemSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      default: null,
    },
    stats: Stats,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const UserItem = model("UserItem", userItemSchema);

module.exports = UserItem;
