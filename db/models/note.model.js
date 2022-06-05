const { default: mongoose } = require("mongoose");

// Create schema (similar to interface) - (what kind of properties we will have)
// Create model using the schema

const noteSchema = new mongoose.Schema({
    text: String,
    link: String
});

module.exports = mongoose.model("Note", noteSchema);