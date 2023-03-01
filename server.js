const express = require("express")
const app = express()

// imports controller from folder
const musiciansController = require("./controllers/musicians")

//  setup ejs 
app.set("view engine","ejs")
//  connect css files and js files 
app.use(express.static('public'))

const PORT = 3000

// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});
// Route to Controllers Folder  app.use wants to use all the imports from controller
app.use("/musicians",musiciansController)

// All Error Handleing Route
app.get("/*", (req, res) => {
  res.render("404.ejs");
});





app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})