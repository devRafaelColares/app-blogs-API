const jwt = require('jsonwebtoken');
const { UserService } = require('../services/User.service');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const user = await UserService.getByUserId(decoded.payload.id);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
