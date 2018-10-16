const express = require('express');
const nodemailer = require('nodemailer');
const Joi = require('joi');
const { body } = require('express-validator/check');

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

const emailRequestSchema = {
  toAdress: Joi.string().email().required().error(new Error('recipients address is required')),
  subject: Joi.string().optional(),
  message: Joi.string().min(1).required().error(new Error('Message body is required'))
}

router.post('/', async (req, res) => {
  const validation = Joi.validate(req.body, emailRequestSchema, { abortEarly: false });
  if (!validation.error) {
    const { toAdress, subject, message } = req.body;
    await sendEmails(toAdress, subject, message);
    res.send('Email sent');
  } else {
    res.status(400);
    res.send(validation.error.message);
  }
});

module.exports = router;
