const express = require("express");
const { getAllBus, getBusDetails } = require("../controllers/busController");
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

module.exports = userRouter;
