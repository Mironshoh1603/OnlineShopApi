const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchErrorAsync");
const bcrypt = require("bcryptjs");
const AppError = require("../utility/appError");
const authController = require("./authController");
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  addOne,
} = require("./handlerController");

const getAllUsers = getAll(User);
const getUserById = getOne(User);
const addUser = addOne(User);
const updateUser = updateOne(User);
const deleteUser = deleteOne(User);

const updateMePassword = catchErrorAsync(async (req, res, next) => {
  // 1) Eski parolni tekshirishib kuramiz

  if (req.body.oldPassword == req.body.newPassword) {
    return next(
      new AppError("Yangi va eski parollar bir xil bulmasligi kerak!", 404)
    );
  }

  if (!req.body.oldPassword) {
    return next(new AppError("Siz eski parolni kiritishingiz shart!", 401));
  }

  const user = await User.findById(req.user.id).select("+password");
  console.log(user);
  const tekshir = await bcrypt.compare(req.body.oldPassword, user.password);
  if (!tekshir) {
    return next(new AppError("Notugri eski parolni kiritdingiz!", 401));
  }

  // 2) Yangi parolni saqlaymiz.
  if (req.body.newPassword != req.body.newPasswordConfirm) {
    return next(
      new AppError(
        "Siz ikki xil parol kiritib quydingiz, Iltimos qayta tekshiring!",
        401
      )
    );
  }

  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.newPasswordConfirm;
  user.passwordChangedDate = Date.now();
  await user.save();

  // 3) Yangi JWT berish

  const token = authController.createToken(user._id);

  res.status(200).json({
    status: "success",
    token: token,
  });
});

const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

const updateMe = catchErrorAsync(async (req, res, next) => {
  // 1) Malumotlarni yangilash

  const user = await User.findById(req.user.id);

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.photo = req.body.photo || user.photo;

  const newUser = await user.save({ validateBeforeSave: false });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

const deleteMe = catchErrorAsync(async (req, res, next) => {
  // 1) User ni topamiz

  const user = await User.findById(req.user.id).select("active password");

  // 2) Passwordni tekshirish
  const tekshir = bcrypt.compare(req.body.password, user.password);

  if (!tekshir) {
    return next(new AppError("Siz parolni xato kiritdingiz!", 401));
  }

  user.active = false;
  await user.save({ validateBeforeSave: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  updateMePassword,
  updateMe,
  deleteMe,
  getMe,
};
