// appointment booking form backend using nodemailer

const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const job = require("./cron.js");

job.start();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/send-email", (req, res) => {
  const { name, email, message, selectedDoctor, contact } = req.body;

  console.log("New Request:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: selectedDoctor,
    subject: "New Appointment Booking",
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});
