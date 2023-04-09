const ingredientDetail = require('./ingredient_detail.route');
const ingredient = require('./ingredient.route');

exports.Start = (app) => {
    ingredientDetail(app),
    ingredient(app)
}