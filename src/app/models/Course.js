const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255, default: "" },
    description: { type: String, maxLength: 600, default: "" },
    image: { type: String },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Course", Course);
