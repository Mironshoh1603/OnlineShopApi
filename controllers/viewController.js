const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const AppError = require("../utility/appError");
const catchErrorAsync = require("../utility/catchErrorAsync");

let catagoryFunc = async () => {
  const category = await Category.find().populate({ path: "products" });

  if (!category) {
    res.status(404).render("error", {});
  }
  return category;
};

const getAllTours = catchErrorAsync(async (req, res, next) => {
  // 1) Get all tours

  const featureProducts = await Product.find().limit(8);
  const recentProducts = await Product.find().sort("createdAt").limit(8);

  res.status(200).render("index", {
    title: "All tours",
    categories: await catagoryFunc(),
    recentProducts: recentProducts,
    featureProducts: featureProducts,
  });
});

const getTourDatails = catchErrorAsync(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).populate({ path: "reviews" });
  const recentProducts = await Product.find()
    .populate({ path: "reviews" })
    .sort("createdAt")
    .limit(5);
  const reviews = await Review.find({ productId: id }).populate({
    path: "userId",
    select: "name photo",
  });

  res.status(200).render("details", {
    title: "All tours",
    categories: await catagoryFunc(),
    recentProducts: recentProducts,
    product: product,
    reviews: reviews,
  });
});
const getShop = catchErrorAsync(async (req, res) => {
  const product = await Product.find().populate({ path: "reviews" });
  const recentProducts = await Product.find()
    .populate({ path: "reviews" })
    .sort("createdAt")
    .limit(9);

  res.status(200).render("shop", {
    title: "Shop",
    categories: await catagoryFunc(),
    recentProducts: recentProducts,
    product: product,
  });
});
const getContact = catchErrorAsync(async (req, res, next) => {
  res
    .status(200)
    .render("contact", { title: "Shop", categories: await catagoryFunc() });
});

module.exports = { getAllTours, getShop, getTourDatails, getContact };
