const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // paymentFullValue: {
    //   type: Number,
    //   required: true,
    // },
    paymentPaid: {
      type: Number,
      required: true,
    },
    paymentCondition: {
      type: String,
      required: true,
      enum: ["paid", "partially", "unpaid"],
    },
    address: {
      type: String,
      required: [true, "You must enter your address!"],
    },
    create_At: {
      type: Date,
      default: Date.now(),
    },
    cartId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "carts",
        required: [true, "You must enter  your cart"],
      },
    ],
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "You must enter  your profile!"],
    },
    delivered: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
