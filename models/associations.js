const sequelize = require('../config/db');
const User = require('./userModel');
const ChatRoom = require('./chatRoomModel');
const Message = require('./messageModel');

// Associations
User.hasMany(Message, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Message.belongsTo(User, { foreignKey: 'userId' });

ChatRoom.hasMany(Message, { foreignKey: 'chatRoomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Message.belongsTo(ChatRoom, { foreignKey: 'chatRoomId' });

User.hasMany(ChatRoom, { foreignKey: 'createdBy', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ChatRoom.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

module.exports = {
  sequelize,
  User,
  ChatRoom,
  Message,
};
