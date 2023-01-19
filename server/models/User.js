const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const {itemSchema} = require("./Item");
const {shipSchema} = require("./Ship");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^.+@.+\..+$/, "PW Regex Error: Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      default: 0
    },
    inventory: [itemSchema],
    equippedInventory: [itemSchema],
    ship: shipSchema,
    shipInventory: [shipSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  // Hash EVERYTHING user related - I don't want to be next on HackerNews
  // Start with bcrypt for passwords, but find a key storage system for being
  // able to store a decryption key for secondary user information like email
  // and username so it's at least stored encrypted
  if (this.isNew) {
    console.log('userSchema: Hashing password for first time')
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  // if (this.isModified("password")) {
  //   console.log('userSchema: Hashing password after password change')
  //   this.password = await bcrypt.hash(this.password, saltRounds);
  // }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  console.log(`userSchema checking validity of password ${password} against hashed password ${this.password}, result = ${result}`)
  return result
};

const User = model("User", userSchema);

module.exports = User;
