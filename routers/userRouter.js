const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.login);
router.route("/forgotpassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").post(authController.resetPassword);

// Middleware for all next route
router.use(authController.protect);

router.route("/updatePassword").post(authController.updatePassword);
router.route("/updateMe").patch(userController.updateMe);
router.route("/deleteMe").patch(userController.deleteMe);
router.route("/updateMePassword").patch(userController.updateMePassword);
router.route("/updateMeData").patch(userController.updateMe);
router.route("/deleteMe").delete(userController.deleteMe);
router.route("/getMe").get(userController.getMe, userController.getUserById);
router.route("/logout").post(authController.logout);

router.route("/").get(userController.getAllUsers).post(userController.addUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .patch(authController.role(["admin", "team-lead"]), userController.updateUser)
  .delete(
    authController.role(["admin", "team-lead"]),
    userController.deleteUser
  );

module.exports = router;
