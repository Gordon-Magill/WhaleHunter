const { Schema, model } = require("mongoose");

const statsSchema = new Schema(
  {
    attackPower: {
      type: Number,
      default: 1,
    },
    health: {
      type: Number,
      default: 1,
    },
    
    // this is limited damage reduction. it decrements when hit and bleeds a % of damage to health
    armor: {
      type: Number,
      default: 0,
    },

    // this is temporary health. it is consumed before health
    shield: {
      type: Number,
      default: 0,
    },

    // weapon accuracy. rolls vs evasion to determine a hit/miss and severity of hit
    accuracy: {
      type: Number,
      default: 0,
    },

    // determines who makes the first action. rolled every round
    initiative: {
      type: Number,
      default: 0,
    },

    // ability to avoid a hit. rolls against accuracy
    evasion: {
      type: Number,
      default: 0,
    },
    imageID: {
      type: String,
      required:true,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


module.exports = {
  statsSchema
};
