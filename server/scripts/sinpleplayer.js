const countryLookup = require("../db/countryLookupModal")

require('dotenv').config(
    {
        path: require('path').resolve(__dirname, '../.env.development')
    }
);

//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
const connectionstring = process.env.DB_CONNECTION_STRING;
mongoose.connect(connectionstring).then(() => console.log('✅ Connected to MongoDB'))

async function getCountries() {
    try {
        const data = await countryLookup.find()
        return data
    } catch (err) {
        console.error(err)
    }
}

module.exports = { getCountries};