const mongoose = require("mongoose");
const fs = require("fs");
const category = require("./../models/categoryModel");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
console.log(process.env.DATABASE);

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });

const user = JSON.parse(fs.readFileSync("./data/user.json", "utf-8"));

const addData = async () => {
  try {
    await userModel.create(user, { validateBeforeSave: false });
    console.log("Narmalni saqladi");
    process.exit(0);
  } catch (err) {
    console.log("Kalla quydi: " + err);
  }
};
const deleteData = async () => {
  try {
    await category.deleteMany();
    console.log("Top toza");
    process.exit(0);
  } catch (err) {
    console.log("Kir");
  }
};
// addData();
deleteData();
