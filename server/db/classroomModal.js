const mongoose = require("mongoose")

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 20,
        default: "Classroom"
    },

    rounds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "round"
    }]
}, { timestamps: true });

module.exports = mongoose.model("classroom", classroomSchema)