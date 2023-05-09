const mongoose = require("mongoose");

//making api and will test through postman,, how things are stored in db
const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdb",
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projectdb",
    },
  },
  {
    timestamps: true,
  }
);
//issue database
const issuedb = mongoose.model("issuedb", issueSchema);
module.exports = issuedb;
