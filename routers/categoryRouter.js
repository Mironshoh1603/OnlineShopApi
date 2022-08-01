const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.addOneCategory);

router
  .route("/:id")
  .get(categoryController.getOneCategory)
  .patch(categoryController.updateOneCategory)
  .delete(categoryController.deleteOneCategory);

module.exports = router;
