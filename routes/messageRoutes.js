const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.get('/', messageController.getMessages);
router.post('/', messageController.postMessage);

module.exports = router;
