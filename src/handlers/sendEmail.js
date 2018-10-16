const Joi = require('joi');
const nodemailer = require('nodemailer');
const config = require('../config/index');
const { errorHandler } = require('../helpers/errorHandler');
const { JOISchema } = require('../config/emailJOISchema');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password,
  },
});

module.exports = {
  emailHandler: async (req, res) => {
    const validation = Joi.validate(req.body, JOISchema, { abortEarly: false });
    if (!validation.error) {
      const { toAdress, subject, message } = req.body;
      transporter.sendMail({
        to: toAdress,
        subject,
        text: message
      }).then(() => {
        res.send('Email seccuessfully sent')
      }).catch((e) => {
        errorHandler(e);
        res.status(500);
        res.send('Email failed to send');
      });
    } else {
      res.status(400);
      res.send(validation.error.message);
    }
  }
}
