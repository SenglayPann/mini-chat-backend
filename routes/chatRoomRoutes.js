const express = require('express');
const chatRoomController = require('../controllers/chatRoomController');

const router = express.Router();

router
  .route('/')
  .post(chatRoomController.createRoom);

module.exports = router;
