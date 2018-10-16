const express = require('express');
const { emailHandler } = require('../handlers/sendEmail');

const router = express.Router();
router.post('/', emailHandler);

module.exports = router;
