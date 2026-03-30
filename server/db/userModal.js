const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        firstname: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 20,
            trim: true
        }
    },

    bio: {
        type: String,
        maxlength: 150,
        required: false
    },

    photoID: {
        type: Number,
        required: true,
        default: () => Math.floor(Math.random() * 10)
    },

    username: {
        type: String,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    roomID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "classroom"
    }],
    
    token: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema)