const Product = require("./../models/productModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const options = {
  path: "categoryId",
  select: "name -_id",
};

const getAllProduct = getAll(Product, options);
const getOneProduct = getOne(Product, options);
const deleteOneProduct = deleteOne(Product);
const updateOneProduct = updateOne(Product);
const addOneProduct = addOne(Product);

module.exports = {
  getAllProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
  addOneProduct,
};
