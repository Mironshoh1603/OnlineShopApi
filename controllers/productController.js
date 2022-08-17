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
const options2 = { path: "reviews" };

const getAllProduct = getAll(Product, options, options2);
const getOneProduct = getOne(Product, options, options2);
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
