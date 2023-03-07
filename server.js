const express = require("express")
const app = express()
const methodOverride = require("method-override");
// imports controller from folder
const musiciansController = require("./controllers/musicians")
const userController = require("./controllers/users")
const apiController = require("./controllers/apiUsers")
const breweriesController = require("./controllers/breweries")
// Allows us to override form method to delete
app.use(methodOverride("_method"));

const session = require("express-session");
const MongoStore = require("connect-mongo")
require('dotenv').config();


/* MiddleWare */

//  setup ejs 
app.set("view engine","ejs")
//  connect css files and js files 
app.use(express.static('public'))
// Parse data to work with ejs (req.body)
app.use(express.urlencoded({ extended: false }));
// config varaible 
const PORT = 3000

app.use(
  session({
    // where to store the sessions in mongodb
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    // Secret Key 
    secret: "super secret",
    resave: false,
    saveUninitialized: false,
    //  config the expectation of the cookie 
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, 
    },
  })
);





// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});
// Route to Controllers Folder  app.use wants to use all the imports from controller
app.use("/musicians",musiciansController)
app.use("/users", userController);
app.use("/apiUsers", apiController);
app.use("/breweries", breweriesController);

// All Error Handleing Route
app.get("/*", (req, res) => {
  res.render("404.ejs");
});



app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})