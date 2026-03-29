const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    gameID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "game",
    },
}, { _id: false })

const teamSchema = new mongoose.Schema({
    players: {
        type: [playerSchema],
        default: []
    },
    teamScore: {
        type: Number,
        default: 0
    }
}, { _id: false })

const roundSchema = new mongoose.Schema({
    teams: {
        type: [teamSchema],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("round", roundSchema)