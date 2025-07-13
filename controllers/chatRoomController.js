const ChatRoom = require('../models/chatRoomModel');

exports.createRoom = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Room name is required.' });
  }
  try {
    const room = await ChatRoom.create({ name, description });
    res.status(201).json(room);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Room name already exists.' });
    }
    res.status(500).json({ message: 'Error creating chat room.' });
  }
};
