const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true, default: "" },
        description: { type: String, default: "" },
        image: { type: String },
        level: { type: String },
        videoId: { type: String, required: true },
        slug: { type: String, slug: "name", unique: true },
    },
    { timestamps: true },
);

// Add plugin methods
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    // deleteAt: true,
    overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
