const Review = require("../models/reviewModel");
const AppError = require("../utility/appError");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const options = {
  path: "productId",
  select: "name",
};
const options2 = {
  path: "userId",
  select: "name",
};

const getAllReviews = getAll(Review, options, options2);
const getOneReview = getOne(Review, options, options2);
const deleteOneReview = deleteOne(Review);
const updateOneReview = updateOne(Review);
const addOneReview = addOne(Review);
module.exports = {
  addOneReview,
  getAllReviews,
  getOneReview,
  updateOneReview,
  deleteOneReview,
};
