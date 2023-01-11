const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userItemSchema = require("./UserItem");

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
    inventory: [userItemSchema],
    equippedInventory: [userItemSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  // Hash EVERYTHING - I don't want to be next on HackerNews
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.username = await bcrypt.hash(this.username, saltRounds);
    this.email = await bcrypt.hash(this.email, saltRounds);
    this.inventory = await bcrypt.hash(this.inventory, saltRounds);
  }

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isModified("username")) {
    this.username = await bcrypt.hash(this.username, saltRounds);
  }

  if (this.isModified("email")) {
    this.email = await bcrypt.hash(this.email, saltRounds);
  }

  if (this.isModified("inventory")) {
    this.inventory = await bcrypt.hash(this.inventory, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
