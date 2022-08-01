const env = require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("DATABASE Connected...");
  })
  .catch(() => {
    console.log("DARABASE No connect???");
  });

app.listen(process.env.PORT, () => {
  console.log(`api is listened on ${process.env.PORT}`);
});
