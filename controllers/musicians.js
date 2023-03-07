const express = require("express")
// router is used instead of app to export easy in its own file 
const router = express.Router()

const {Musicians} = require('../models')


// GET ALL Musician 

router.get('/', async (req,res,next) =>{
    try{
        const myMusicians = await Musicians.find({})
        // console.log(myMusicians)
        res.render("musicians/index.ejs", {musicians: myMusicians})
    } catch(err){
        console.log(err);
        return next
    }
})

// GET Musician by ID
router.get('/:id', async (req,res,next)=>{
    try{
        const musician = await Musicians.findById(req.params.id);
        // console.log(musician)
        res.render("musicians/show.ejs", {musician: musician})
    }catch(err){
        console.log(err)
        return next()
    }
})

// Route to Create New Musician Page 
router.get("/new", (req, res) => {
  res.render("musicians/new.ejs");
});



// Edit - route
router.get("/:id/edit", async (req, res, next) => {
  try {
    const artistToEdit = await Musicians.findById(req.params.id);
    console.log(artistToEdit)
    console.log(req.params.id)
    res.render('musicians/edit.ejs', {artistToEdit: artistToEdit})
  } catch (error) {
    console.log(error);
    return next()
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newArtist = await Musicians.create(req.body);
    console.log(newArtist);
    res.redirect("/musicians");
  } catch (error) {
    console.log(error);
    return next();
  }
});

// PUT - ROUTE 

router.put('/:id', async(req,res,next) => {
    try{
        console.log(req.params.id)
        console.log(req.body)
        const updateArtist = await Musicians.findByIdAndUpdate(req.params.id, req.body);
        console.log(updateArtist)
        res.redirect('/musicians')
    }catch(error){
        console.log(error)
        return next()
    }
})


// DELETE Musician by ID
router.delete("/:id", async (req, res,next) => {
  try {
    console.log(req.params);
    console.log("I'm hitting the delete route");
    const deleteMusician = await Musicians.findByIdAndDelete(req.params.id);
    console.log(deleteMusician);
    res.redirect("/musicians");
  } catch (error) {
    console.log(error);
    return next();
  }
});


module.exports = router;