const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const AppError = require("../utility/appError");
const catchErrorAsync = require("../utility/catchErrorAsync");

const getAllTours = catchErrorAsync(async (req, res, next) => {
  // 1) Get all tours
  const category = await Category.find().populate({ path: "products" });

  if (!category) {
    res.status(404).render("error", {});
  }
  const featureProducts = await Product.find().limit(8);
  const recentProducts = await Product.find().sort("createdAt").limit(8);

  res.status(200).render("index", {
    title: "All tours",
    categories: category,
    recentProducts: recentProducts,
    featureProducts: featureProducts,
  });
});

// const getOneTour = catchErrorAsync(async (req, res) => {
//   const slug = req.params.id;

//   const tour = await Tour.findOne({ _id: req.params.id }).populate({
//     path: "reviews",
//     select: "review rating user",
//   });
//   console.log(tour);
//   if (!tour) {
//     return next(new AppError("This page not found", 404));
//   }

//   console.log(tour);

//   res.status(200).render("tour", {
//     tour: tour,
//   });
// });

// const login = catchErrorAsync(async (req, res, next) => {
//   res.status(200).render("login", {});
// });

// const account = catchErrorAsync(async (req, res, next) => {
//   res.status(200).render("account", {});
// });

// const submitData = catchErrorAsync(async (req, res, next) => {
//   console.log(req.body.name);
//   const updateData = await User.findByIdAndUpdate(
//     req.user.id,
//     {
//       name: req.body.name,
//       email: req.body.email,
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   res.status(200).render("account", {
//     msg: "Your data has been updated",
//     user: updateData,
//   });
// });

module.exports = { getAllTours };
