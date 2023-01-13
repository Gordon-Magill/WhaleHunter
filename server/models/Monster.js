const { Schema, model } = require("mongoose");

const monsterSchema = new Schema(
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
    evasion: {
      type: Number,
      required: true,
      default: 1,
    },
    imageID: {
      type: String,
      required: true,
    },
    expGrant: {
        type: Number,
        required:true
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Monster = model('Monster', monsterSchema)

module.exports = {
    Monster,
    monsterSchema
}
