const express = require("express");
const {
  getAllBus,
  getBusDetails,
  getBusDetailsofCompany,
} = require("../controllers/busController");
const {
  register,
  login,
  addBusDetails,
} = require("../controllers/users/userController");
const Bus = require("../models/busModel");
const { generateBusDetails } = require("../utils/helper");
const nodemailer = require("nodemailer");
const pdfkit = require("pdfkit");
const fs = require("fs");
const path = require("path");

const userRouter = express.Router();

function generateInvoice() {
  const pdfContent = `
    <html>
      <head>
        <style>
          /* Add your invoice styling here */
        </style>
      </head>
      <body>
        <h1>Invoice</h1>
        <p>Invoice content goes here</p>
      </body>
    </html>
  `;
  const dummyPdf = Buffer.from(pdfContent);

  return dummyPdf;
}

function generateInvoice() {
  const PDFDocument = require("pdfkit");
  const fs = require("fs");

  const invoiceNumber = "INV-001";
  const invoiceDate = new Date().toLocaleDateString();
  const customerName = "John Doe";
  const totalAmount = 100.0;

  const doc = new PDFDocument();

  doc.text("Invoice", { align: "center" });
  doc.moveDown();
  doc.text("Item 1: $10");
  doc.text("Item 2: $20");
  doc.text("Total: $30");
  doc.end();

  const invoice = fs.readFileSync("invoice.pdf");

  fs.unlinkSync("invoice.pdf");

  return invoice;
}

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

userRouter.post("/sendmail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., 'Gmail' or 'Outlook'
    auth: {
      user: "aswin1542000@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  // Setup email data
  const mailOptions = {
    from: "aswinst154@gmail.com",
    to: "aswin1542000@gmail.com",
    subject: "Hello from Nodemailer",
    text: "Hello, this is a test email sent using Nodemailer!",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
    } else {
      console.log("Email sent successfully!");
      console.log("Message ID:", info.messageId);
    }
  });
  res.send("hello");
});

userRouter.get("/send-invoice", async (req, res) => {
  const invoice = generateInvoice();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Invoice",
    text: "Please find attached invoice.",
    attachments: [
      {
        filename: "invoice.pdf",
        content: invoice,
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error occurred while sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully!");
    }
  });
});

userRouter.get("/get-my-bus/:companyId", async (req, res) => {
  let companyId = req.params.companyId;
  getBusDetailsofCompany(companyId).then((result) => {
    res.send(result);
  });
});

module.exports = userRouter;
