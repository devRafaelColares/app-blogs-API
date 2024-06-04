const jwt = require('jsonwebtoken');
const userService = require('../services/User.service');

const secret = process.env.JWT_SECRET;

const decodeToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1]; // Extrai o token JWT

  try {
    // Decodifica o token para obter os dados do usuário
    const decodedToken = jwt.verify(token, secret);
    
    const userId = decodedToken.payload.id;

    if (!userId) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    const user = await userService.getByUserId(userId);

    if (!user) { return res.status(401).json({ message: 'Expired or invalid token' }); }
    // Adiciona o userId ao objeto req
    req.userId = decodedToken.userId;

    // Continua para o próximo middleware
    next();
  } catch (err) {
    // Se o token não for válido, retorna uma mensagem de erro
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = decodeToken;