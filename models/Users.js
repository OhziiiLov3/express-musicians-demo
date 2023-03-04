const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please proivde a username"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
  },
  {
    timestamp: true,
  }
);

// mongoose.model(<mongodb collection name>, our schema)
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
