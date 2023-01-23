const { Schema, model } = require("mongoose");

const iconSchema = new Schema(
  {
    objectType: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Icon = model('Icon', iconSchema)

module.exports = {Icon}