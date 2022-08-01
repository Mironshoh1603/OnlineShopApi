const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "YOu must enter Category name!"],
  },
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
