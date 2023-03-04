require("dotenv").config()
const {DATABASE_URL} = process.env;
const axios = require('axios')
const mongoose = require('mongoose')
mongoose.connect(DATABASE_URL)


mongoose.connection
    .on('open',()=> console.log("Mongoose Connected"))
    .on('close',()=> console.log("Mongoose didsconneted"))
    .on('error',(error)=> console.log(error))


const {Breweries} = require('./models')


const seedingData= async () => {
    try {
        const myBreweries = await axios.get("https://api.openbrewerydb.org/breweries");
        const allMyBreweries = myBreweries.data;
        console.log(allMyBreweries)
        const deletedBreweries = await Breweries.deleteMany({})
        const addedBreweries = await Breweries.insertMany(allMyBreweries);
        console.log(deletedBreweries)
        console.log(addedBreweries)
    } catch (error) {
        console.log(error)
    }
}

seedingData()