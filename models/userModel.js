const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const useBcrypt = require('sequelize-bcrypt');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = User;

// encrypt password
useBcrypt(User, {
  field: "password",
  rounds: 12,
  compare: 'authenticate'
});
