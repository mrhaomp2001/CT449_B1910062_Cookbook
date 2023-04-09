const models = require('../models');
const model = models.ingredientDetail;
const { ObjectId } = require('mongodb');

exports.create = async (data) => {
  const document = await model.findOneAndUpdate(
    data,
    {
      $set: {}
    },
    {
      returnDocument: "after",
      upsert: true,
    },
  );
  return document;
}

exports.find = async () => {
  const document = await model.find({}).populate('id_ingredient id_recipe');
  return document;
}

// exports.findByName = async (name) => {
//   const document = await ingredientDetail.find({
//     name: { $regex: new RegExp(name), $options: "i" },
//   });
//   return document;
// }

exports.findById = async (id) => {
  const document = await model.findOne({
    _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
  });
  return document;
}

exports.update = async (id, payload) => {
  const condition = {
    _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
  };

  const data = payload;
  const result = await model.findOneAndUpdate(
    condition,
    { $set: data },
    { returnDocument: "after" },
  );
  return result;
}

exports.delete = async(id) => {
  const result = await model.findOneAndDelete({
    _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
  });
  return result;
}

exports.deleteAll = async() => {
  const result = await model.deleteMany({});
  return result;
}