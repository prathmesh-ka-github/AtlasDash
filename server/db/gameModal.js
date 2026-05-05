const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    score: {
        type: Number,
        default: 0
    },

    socketID:{
        type: String,
        required: true
    },

    questionSet:{
        type: Array,
        required: true,
    },

    answers:[{
        country:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "country"
            },
        value: Boolean,
        _id: false
    }],
}, { timestamps: true });

module.exports = mongoose.model("game", gameSchema)