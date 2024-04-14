const jwt = require('jsonwebtoken');

const secretToken = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function generateToken(payload, secret, config) {
  const token = jwt.sign(
    { payload },
    secret,
    config,
  );
  return token;
}

module.exports = {
  generateToken,
  jwtConfig,
  secretToken,
};
