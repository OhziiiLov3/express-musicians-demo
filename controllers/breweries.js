const express = require("express");
const router = express.Router();
const { Breweries } = require("../models");



router.get("/", async (req, res) => {
  try {
    // res.status(200).json(await Breweries.find({}));
     const myBreweries = await Breweries.find({});
    res.render("breweries/index.ejs", { breweries: myBreweries });
  } catch (err) {
    console.log(err);
  }
});

// Route to Create New Musician Page 
router.get("/new", (req, res) => {
  res.render("musicians/new.ejs");
});


router.post('/', async (req,res)=>{
 try{
  res.status(200).json(await Breweries.find({}));
 }catch(error){
  console.log(error)
 }
})





module.exports = router;