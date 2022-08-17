const Category = require("./../models/categoryModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const options = {
  path: "products",
};

const getAllCategory = getAll(Category, options);
const getOneCategory = getOne(Category, options);
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
