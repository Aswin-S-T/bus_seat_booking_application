const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Database configuration
const db = require("./config/db");
db.connect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Nodejs started....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
