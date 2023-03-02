const mongoose = require('mongoose')

const musiciansSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true,"Please proivde a name"]
        },
        image:{
            type: String,
            required: [true, "Please provide Url of Image"],
            unique: [true, "No dupilcates,Please use another Image"]
        }, 
        instrument: String,
    },
    {
        timestamp: true
    }
);


// mongoose.model(<mongodb collection name>, our schema) is the general default and it creates a collection inside of MongoDB that is named from the first argument, Musicians here. And it applies the schema above to that collection.
const Musicians = mongoose.model("Musician", musiciansSchema)


module.exports = Musicians;