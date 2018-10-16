const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config/index');

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password,
  },
});

const sendEmails = (toAdress, subject, message) => {
  transporter.sendMail({
    to: toAdress,
    subject,
    text: message
  }, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

router.post('/', async (req, res) => {
  const { toAdress, subject, message } = req.body;
  sendEmails(toAdress, subject, message);
  res.send('Email sent');
});

module.exports = router;
