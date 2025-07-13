const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router
  .route('/')
  .get(messageController.getMessages)
  .post(messageController.postMessage);

module.exports = router;
