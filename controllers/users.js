const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const {Users} = require('../models')


// display a form for ysers to fill out to make a new account 
router.get('/signup',(req,res)=>{
  res.render('users/signup')
})


router.get('/login', (req,res)=>{
  res.render('users/login')
})



router.get('/logout', (req, res, next) =>{
  try{
    const destroySession = req.session
    destroySession.destroy()
    console.log(destroySession)
    res.redirect('/')
  }catch(err){
    console.log(err)
    next()
  }
})

router.post('/login', async (req,res, next )=>{
    try{
      const userLogin = req.body;
      const foundUser = await Users.findOne({username: userLogin.username})


      // if(!foundUser){
      //   return res.redirect('users/signup')
      // }

      const match = await bcrypt.compare(userLogin.password, foundUser.password);
      console.log(match)
      if (!match) return res.send("Email or password doesn't Match!");
      req.session.currentUser = {
        id: foundUser._id,
        username: foundUser.username,
      }
      return res.redirect('/musicians')
    }catch(error){
      console.log(error)
      return next()
    }
})


router.post("/register", async (req, res, next) => {
  try {
    // set the usersInfo variable to what the user sent you in their form
    const usersInfo = req.body;
    console.log(usersInfo);
    // exists is just validating whether or not this user exists in the database. If they do, we don't create another one so we're going to just redirect them to the login page
    const foundUser = await Users.exists({ email: usersInfo.email });
    console.log(foundUser);
    if (foundUser) {
      return res.redirect("/login");
    }
    // This is how many rounds of salt are added
    let salt = await bcrypt.genSalt(12);
    console.log(`My salt is ${salt}`);
    // create a hash
    const hash = await bcrypt.hash(usersInfo.password, salt);
    console.log(`My hash is ${hash}`);
    usersInfo.password = hash;
    const newUser = await Users.create(usersInfo);
    console.log(newUser);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return next();
  }
});







module.exports = router;