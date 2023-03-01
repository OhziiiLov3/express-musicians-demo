const express = require("express")
// router is used instead of app to export easy in its own file 
const router = express.Router()

const {Musicians} = require('../models')




router.get('/', async (req,res,next) =>{
    try{
        const myMusicians = await Musicians.find({})
        console.log(myMusicians)
        const context = {
            musicisans: myMusicians,
        }
        res.render("musicians/index.ejs",context)
    } catch(err){
        console.log(err);
        return next
    }
})



module.exports = router;