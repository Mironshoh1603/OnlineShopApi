const express = require("express");
const viewController = require("./../controllers/viewController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/", viewController.getAllTours);
router.get("/product/:id", viewController.getTourDatails);
// router.get("/tour/:id", viewController.getOneTour);
// router.get("/login", viewController.login);
// router.get("/me", authController.protect, viewController.account);
// router.post(
//   "/submit-form-data",
//   authController.protect,
//   viewController.submitData
// );

module.exports = router;
