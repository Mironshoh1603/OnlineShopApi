const mongoose = require("mongoose");

const shoppingCartSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
      default: 1,
      validate: {
        validator: function (val) {
          return val >= 1;
        },
        message: "Your must enter quantity  elder then one!",
      },
    },
    selectColor: {
      type: String,
      enum: ["Red", "Black", "White", "Blue", "Green"],
    },
    selectSize: { type: String, enum: ["XS", "M", "XL", "S", "L"] },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
      required: [true, "You must enter  your product category!"],
    },
  },
  {
    timestamps: true,
  }
);

const ShoppingCart = mongoose.model("carts", shoppingCartSchema);

module.exports = ShoppingCart;
