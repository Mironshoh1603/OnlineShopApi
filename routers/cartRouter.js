const express = require("express");
const router = express.Router();
const ShoppingCartController = require("../controllers/shoppingCartController");

router
  .route("/")
  .get(ShoppingCartController.getAllShoppingCart)
  .post(ShoppingCartController.addOneShoppingCart);

router
  .route("/:id")
  .get(ShoppingCartController.getOneShoppingCart)
  .patch(ShoppingCartController.updateOneShoppingCart)
  .delete(ShoppingCartController.deleteOneShoppingCart);

module.exports = router;
