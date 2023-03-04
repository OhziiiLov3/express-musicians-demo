const express = require("express")
const app = express()
const methodOverride = require("method-override");
// imports controller from folder
const musiciansController = require("./controllers/musicians")
const userController = require("./controllers/users")
const apiController = require("./controllers/apiUsers")
// Allows us to override form method to delete
app.use(methodOverride("_method"));

//  setup ejs 
app.set("view engine","ejs")
//  connect css files and js files 
app.use(express.static('public'))
// Parse data to work with ejs (req.body)
app.use(express.urlencoded({ extended: false }));
// config varaible 
const PORT = 3000





// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});
// Route to Controllers Folder  app.use wants to use all the imports from controller
app.use("/musicians",musiciansController)
app.use("/users", userController);
app.use("/apiUsers", apiController);

// All Error Handleing Route
app.get("/*", (req, res) => {
  res.render("404.ejs");
});



app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})