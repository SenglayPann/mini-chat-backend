const Message = require('../models/messageModel');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [['time', 'ASC']] });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching messages.' });
  }
};

exports.postMessage = async (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ message: 'User and text are required.' });
  }
  try {
    const msg = await Message.create({ user, text });
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: 'Error saving message.' });
  }
};
