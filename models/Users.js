const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please proivde a name"],
    },
    password: {
      type: String,
      required: [true, "Please provide Url of Image"],

    }
  },
  {
    timestamp: true,
  }
);

// mongoose.model(<mongodb collection name>, our schema)
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
