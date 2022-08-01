const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "YOu must enter Category name!"],
    minLength: 3,
  },
  price: {
    type: Number,
    required: true,
  },
  ratingsAvarage: {
    type: Number,
    default: 3,
    max: 5,
    min: 0,
  },
  image: [
    {
      type: String,
    },
  ],
  sizes: [{ type: String, enum: ["XS", "M", "XL", "S", "L"] }],
  colors: [{ type: String, enum: ["Red", "Black", "White", "Blue", "Green"] }],
  description: {
    type: String,
  },

  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "categories",
    required: [true, "You must enter  your product category!"],
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
