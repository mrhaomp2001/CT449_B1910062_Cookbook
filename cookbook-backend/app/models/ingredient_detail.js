const mongoose = require("mongoose");

const { Schema } = mongoose;

const IngredientDetailsSchema = new Schema({
  id_ingredient: {
    type: Schema.Types.ObjectId,
    ref: "ingredients",
  },
  id_recipe: {
    type: Schema.Types.ObjectId,
    ref: "recipes",
  },
  quantity: {
    type: String,
  },
});

module.exports = mongoose.model("ingredient_details", IngredientDetailsSchema);
