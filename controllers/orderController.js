const Order = require("./../models/orderModel");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const options = {
  path: "cartId",
  select: "-_id",
};

const getAllOrder = getAll(Order, options);
const getOneOrder = getOne(Order, options);
const deleteOneOrder = deleteOne(Order);
const updateOneOrder = updateOne(Order);
const addOneOrder = addOne(Order);

module.exports = {
  getAllOrder,
  getOneOrder,
  updateOneOrder,
  deleteOneOrder,
  addOneOrder,
};
