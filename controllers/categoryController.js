const Category = require("./../models/categoryModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const getAllCategory = getAll(Category);
const getOneCategory = getOne(Category);
const deleteOneCategory = deleteOne(Category);
const updateOneCategory = updateOne(Category);
const addOneCategory = addOne(Category);

module.exports = {
  getAllCategory,
  getOneCategory,
  updateOneCategory,
  deleteOneCategory,
  addOneCategory,
};
