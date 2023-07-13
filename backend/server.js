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

// const corsOptions = {
//   origin: "https://64afc6878ddcda4252e3359c--dancing-blini-b82d38.netlify.app/", // Replace with your frontend URL
//   optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) choke on 204
// };

// app.use(cors());

// Enable CORS with specific options
app.use(
  cors({
    origin:
      "https://64afc8cdccf19b00a45aeabd--extraordinary-pegasus-04b5a7.netlify.app/", // Replace with your allowed origin
    methods: ["GET", "POST"], // Replace with your allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Replace with your allowed headers
  })
);



// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
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
