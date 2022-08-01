const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

router
  .route("/")
  .get(OrderController.getAllOrder)
  .post(OrderController.addOneOrder);

router
  .route("/:id")
  .get(OrderController.getOneOrder)
  .patch(OrderController.updateOneOrder)
  .delete(OrderController.deleteOneOrder);

module.exports = router;
