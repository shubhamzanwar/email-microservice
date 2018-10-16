const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'learn.mdl.microservices@gmail.com',
    pass: '768chinaStreet',
  },
});

const sendEmails = (toAdress, subject, message) => transporter.sendMail({
  to: toAdress,
  subject,
  text: message
})

router.post('/', async (req, res) => {
  const { toAdress, subject, message } = req.body;
  await sendEmails(toAdress, subject, message);
  res.send('Email sent');
});

module.exports = router;
