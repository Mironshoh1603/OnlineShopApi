const express = require("express");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter");
const orderRouter = require("./routers/orderRouter");
const userRouter = require("./routers/userRouter");
const reviewRouter = require("./routers/reviewRouter");
const viewRouter = require("./routers/viewRouter");
const path = require("path");

const pug = require("pug");

const app = express();
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", viewRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
