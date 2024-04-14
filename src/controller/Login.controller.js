const { getByEmail } = require('../services/User.service');
const { generateToken, jwtConfig, secretToken } = require('../utils/GenerateToken');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await getByEmail(email);
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = generateToken(
    { id: user.id, email: user.email, displayName: user.displayName, image: user.image },
    secretToken,
    jwtConfig,
  );

  res.status(200).json({ token });
};

module.exports = login;
