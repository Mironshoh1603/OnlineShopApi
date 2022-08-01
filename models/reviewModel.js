const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "You must enter review!"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "products",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

reviewSchema.index({ productId: 1, userId: 1 }, { unique: true });

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
