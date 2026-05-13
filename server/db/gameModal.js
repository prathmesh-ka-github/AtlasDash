const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        required: true,
        ref: "user"
    },

    score: {
        type: Number,
        default: 0
    },

    socketID: {
        type: String,
        required: true
    },

    questionSet: {
        type: Array,
        required: true,
    },

    answers: {
        type: Array,
        required: true,
        default: [],
    },
}, { timestamps: true });

module.exports = mongoose.model("games", gameSchema)