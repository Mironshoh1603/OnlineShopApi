const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "YOu must enter Category name!"],
  },
  image: {
    type: String,
    required: [true, "You must enter Category image!"],
  },
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
