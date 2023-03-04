const mongoose = require("mongoose")


const breweriesSchema = new mongoose.Schema({
  id: String,
  name: String,
  brewery_state: String,
  address_2: {
    type: String,
    default: null,
  },
  address_3: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  country_province: {
    type: String,
    default: null,
  },
  postal_code: String,
  longitude: String,
  latitude: String,
  phone: String,
  website_url: {
    type: String,
    default: null,
  },
  updated_at: String,
  created_at: String,
});

const Breweries = mongoose.model("Breweries", breweriesSchema)

module.exports = Breweries; 