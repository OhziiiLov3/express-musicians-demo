require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error"), function() {
    console.log("mongodb error")
  };

db.on('connected'), function() {
console.log(`Connected to MongoDb`)
}

db.on("disconnected"), function() {
    console.log("mongodb disconnected");
}

module.exports ={
    Musicians: require("./Musicians")
}

