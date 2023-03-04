const express = require('express')
const router = express.Router()
const axios = require('axios')
const { response } = require("express");


router.get('/', async (req, res, next)=>{
    console.log('apiUsers Route Working');
    try {
        const response = await axios.get("https://reqres.in/api/users/")
        res.json(response.data)
        const userId = response.data
        console.log(userId)
        // res.render("apiUsers/index.ejs")
    } catch (error) {
        console.log(error)
        return next()
    }
})


module.exports = router;