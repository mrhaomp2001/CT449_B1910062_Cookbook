const mongoose = require("mongoose");

const { Schema } = mongoose;
const IngredientSchema = new Schema({
    _id: [{ type: Schema.Types.ObjectId }],
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredient_details:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'ingredient_details'
            }
        ],
});

module.exports = mongoose.model("ingredients", IngredientSchema);
