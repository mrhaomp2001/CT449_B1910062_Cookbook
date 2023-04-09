const services = require("../services");
const apiError = require("../api-error");
const service = services.recipe;

exports.create = async (req, res, next) => {
  const data = {
    name: req.body.name,
    description: req.body.description,
    content: req.body.content,
    time: req.body.time
  };
  try {
    const document = await service.create(data);

    res.send(document);
  } catch (error) {
    return next(new apiError(500, " Server Error"));

  }
}

exports.getAll = async (req, res, next) => {
  try {
    const document = await service.find();
    res.send(document);
  } catch (error) {
    return next(new apiError(500, " Server Error"));

  }
}

exports.findById = async (req, res, next) => {
  try {
    const document = await service.findById(req.params.id);
    if (!document) {
      return next(new apiError(404, " Resouce not found"));
      // res.status(404).send({ message: "Document not found!" });
    }
    res.send(document);
  } catch (error) {
    return next(new apiError(500, " Server Error"));

  }
}

exports.update = async (req, res, next) => {
  try {
    const document = await service.update(req.params.id, req.body);
    res.send(document);
  } catch (error) {
    return next(new apiError(500, " Server Error"));

  }
}

exports.delete = async (req, res, next) => {
  try {
    const document = await service.delete(req.params.id);
    res.send(document);
  } catch (error) {
    return next(new apiError(500, " Server Error"));

  }
}

exports.deleteAll = async (req, res, next) => {
  try {
    const document = await service.deleteAll();
    res.send({ deletedCount: document.deletedCount });
  } catch (error) {
    return next(new apiError(500, " Server Error"));
  }
}