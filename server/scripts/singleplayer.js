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

async function generateCountryList(){
    // const countries = getCountries()
    let generatedCountries = []
    for (let i = 0; i < 50; i++) {
        while (samenumber = 1) {
            let newint = getRandomInt(1, 50)
            if (generatedCountries.includes(newint)) {
                samenumber = 1
            } else {
                generatedCountries.push(newint)
                samenumber = 0
            }
        }        
    }
    console.log(generatedCountries);
}

function generateQuestions() {
    const pool = Array.from({ length: 109 }, (_, i) => i + 1);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 50); // This will return just 50 numbers
}


module.exports = { getCountries, generateQuestions};