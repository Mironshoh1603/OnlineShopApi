const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "YOu must enter Category name!"],
    },
    image: {
      type: String,
      required: [true, "You must enter Category image!"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },

    timestamps: true,
  }
);

categorySchema.virtual("products", {
  ref: "products",
  localField: "_id",
  foreignField: "categoryId",
});
const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
