const mongoose = require("mongoose");

const { Schema } = mongoose;
const IngredientSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model("ingredients", IngredientSchema);
