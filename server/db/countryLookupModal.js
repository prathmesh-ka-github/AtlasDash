const mongoose = require("mongoose")

const countryLookupSchema = new mongoose.Schema(
    {
        tag: Number,
        name: String,
    },
{ collection: 'countryLookup' }
);

module.exports = mongoose.model("countryLookup", countryLookupSchema)