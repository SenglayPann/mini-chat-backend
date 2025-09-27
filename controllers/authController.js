const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const { creatSendToken } = require('../utils/token')
const AppError = require('../utils/AppError');

exports.signUp = catchAsync(async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new AppError('Email already in use', 400);
  }

  const isPassWordMatch = password === passwordConfirm;

  if (!isPassWordMatch) {
    throw new AppError('Passwords not matched', 400);
  };

  const newUser = await User.create({
    username,
    email,
    password,
  });

  creatSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne()
})
