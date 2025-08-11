const jwt = require('jsonwebtoken');

const signToken = (userId) => {
  jwt.sign({ userId }, process.env.JWT_SECRET, { 
    expiresIn: process.env.JWT_EXPIRES_IN}
  );
};

const creatSendToken = (
  user,
  statusCode,
  req,
  res,
) => {
  const token = signToken(user.id);

  let domain = 'localhost';

  const num = req.headers.origin.includes('www') ? 1 : 0;
  domain = req.headers.origin.split('/')[2].split('.')[num] || req.url;

  const cookieOption = {
    expires: new Date(Date.now() + tokenExpiry * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  };
  res.cookie(`jwt_${domain}`, token, cookieOption);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
}

module.exports = { signToken, creatSendToken };