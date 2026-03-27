const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    photoID: {
        type: Integer,
        required: true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    roomID: {
        type: Array,
        required: false
    },
    registration: {
        type: Date,
        required: true
    },
    token : {
        type : String
    }
});

module.exports = mongoose.model("user", userSchema)