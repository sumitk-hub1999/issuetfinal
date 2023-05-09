const mongoose = require("mongoose");
const path = require("path");
//storing user in mobgodb atlas
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userdb = mongoose.model("userdb", userSchema);

module.exports = userdb;
