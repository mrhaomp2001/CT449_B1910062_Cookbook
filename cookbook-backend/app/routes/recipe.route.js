const express = require("express");
const controllers = require('../controllers');
const controller = controllers.recipe;
module.exports = (app) => {
    const router = express.Router();
    router.route('/')
        .get(controller.getAll)
        .post(controller.create)
        .delete(controller.deleteAll);
    router.route('/:id')
        .get(controller.findById)
        .put(controller.update)
        .delete(controller.delete);

    app.use("/api/recipes", router);
};

    // router.route('/')
    //     .get(ctl.findAll)
    //     .post(ctl.create)
    //     .delete(ctl.deleteAll)

    // router.route('/select')
    //     .get(ctl.findAllSelect)

    // router.route('/:id')
    //     .get(ctl.findOne)
    //     .put(ctl.update)
    //     .delete(ctl.deleteOne)