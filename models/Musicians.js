const mongoose = require('mongoose')

const musiciansSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true,"Please proivde a name"]
        },
        image: String,
        instrument: String,
    },
    {
        timestamp: true
    }
);
// Mongoose.model(mongodb collection name, ourschema)
const Musicians = mongoose.model("Musicians",musiciansSchema)


module.exports = Musicians;