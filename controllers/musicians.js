const express = require("express")
// router is used instead of app to export easy in its own file 
const router = express.Router()

const {Musicians} = require('../models')




router.get('/', async (req,res,next) =>{
    try{
        const myMusicians = await Musicians.find({})
        console.log(myMusicians)
        res.render("musicians/index.ejs", {musicians: myMusicians})
    } catch(err){
        console.log(err);
        return next
    }
})


router.get('/:id', async (req,res,next)=>{
    try{
        const musician = await Musicians.findById(req.params.id);
        console.log(musician)
        res.render("musicians/show.ejs", {musician: musician})
    }catch(err){
        console.log(err)
        return next()
    }
})

router.get("/new", (req, res) => {
  res.render("musicians/new.ejs");
});

router.post('/', async (req,res,next)=>{
    try {
        const newArtist = await Musicians.create(req.body)
        console.log(req.body)
        console.log(newArtist)
        res.redirect('/musicians')
    } catch (error) {
        console.log(error);
        return next()
    }
})





module.exports = router;