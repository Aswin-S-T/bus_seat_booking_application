const express = require("express");
const { getAllBus, getBusDetails } = require("../controllers/busController");
const {
  register,
  login,
  addBusDetails,
} = require("../controllers/users/userController");
const Bus = require("../models/busModel");
const { generateBusDetails } = require("../utils/helper");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user router api callled");
});

userRouter.get("/bus", async (req, res) => {
  await getAllBus().then((result) => {
    res.send(result);
  });
});

userRouter.get("/bus/:id", async (req, res) => {
  await getBusDetails(req.params.id).then((result) => {
    res.send(result);
  });
});

userRouter.post("/register", async (req, res) => {
  let userData = req.body;
  register(userData).then((result) => {
    res.send(result);
  });
});

userRouter.post("/signin", async (req, res) => {
  let userData = req.body;
  login(userData).then((result) => {
    res.send(result);
  });
});

userRouter.post("/add-bus-details", async (req, res) => {
  let busData = req.body;
  addBusDetails(busData).then((result) => {
    res.send(result);
  });
});

module.exports = userRouter;
