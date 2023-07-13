const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Database configuration
const db = require("./config/db");
const userRouter = require("./routes/userRouter");
const companyRouter = require("./routes/companies/comapnyRouter");
db.connect();

const frontendURL =
  "https://64afc2c090cb4b3dc09a9398--graceful-parfait-655225.netlify.app/";

const corsOptions = {
  origin: frontendURL,
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "client/build")));

// Routes configuration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);

app.get("/", (req, res) => {
  res.send("Nodejs started....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
