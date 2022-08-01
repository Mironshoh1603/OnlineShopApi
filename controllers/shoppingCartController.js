const ShoppingCart = require("./../models/ShoppingCartModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const options = {
  path: "productId",
  select: "name price -_id",
};

const getAllShoppingCart = getAll(ShoppingCart, options);
const getOneShoppingCart = getOne(ShoppingCart, options);
const deleteOneShoppingCart = deleteOne(ShoppingCart);
const updateOneShoppingCart = updateOne(ShoppingCart);
const addOneShoppingCart = addOne(ShoppingCart);

module.exports = {
  getAllShoppingCart,
  getOneShoppingCart,
  updateOneShoppingCart,
  deleteOneShoppingCart,
  addOneShoppingCart,
};
