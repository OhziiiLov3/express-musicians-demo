require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

mongoose.connection.on("connected",() => {
    console.log(`Connected to MongoDb`);
  });

mongoose.connection.on("disconnected",() => {
    console.log("mongodb disconnected");
  });

mongoose.connection.on("error",(error) => {
    console.log("mongodb error",error);
  });
