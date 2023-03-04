const express = require("express");
const router = express.Router();
const { Breweries } = require("../models");



router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Breweries.find({}));
  } catch (err) {
    console.log(err);
  }
});





module.exports = router;