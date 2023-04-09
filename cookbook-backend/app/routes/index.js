const ingredientDetail = require('./ingredient_detail.route');
const ingredient = require('./ingredient.route');
const recipe = require('./recipe.route');

exports.Start = (app) => {
    ingredientDetail(app),
    ingredient(app),
    recipe(app)
}