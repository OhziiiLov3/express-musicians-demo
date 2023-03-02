const express = require('express')
const router = express.Router()
const {Users} = require('../models')





router.post("/add_user", async (req, res) => {
    const user = new userModel(request.body)
  try {
    await user.save()
    res.send(user)
  } catch (err) {
    console.log(err);
  res.status(500).send(err);
  }
});







module.exports = router;