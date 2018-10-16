const Joi = require('joi');

const emailRequestSchema = {
  toAdress: Joi.string().email().required().error(new Error('recipients address is required')),
  subject: Joi.string().optional(),
  message: Joi.string().min(1).required().error(new Error('Message body is required'))
};

module.exports = {
  JOISchema: emailRequestSchema
};
