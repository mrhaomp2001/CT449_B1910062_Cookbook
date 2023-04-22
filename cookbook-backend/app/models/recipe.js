const mongoose = require("mongoose");

const { Schema } = mongoose;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }, 
});

module.exports = mongoose.model("recipes", RecipeSchema);
