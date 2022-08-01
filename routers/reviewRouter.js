const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

router
  .route("/")
  .get(ReviewController.getAllReviews)
  .post(ReviewController.addOneReview);

router
  .route("/:id")
  .get(ReviewController.getOneReview)
  .patch(ReviewController.updateOneReview)
  .delete(ReviewController.deleteOneReview);

module.exports = router;
