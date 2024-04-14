const { createUser } = require('../services/User.service');
const { generateToken, secretToken, jwtConfig } = require('../utils/GenerateToken');

const register = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await createUser({ displayName, email, password, image });

    const tokenPayload = {
      id: newUser.id,
      displayName: newUser.displayName,
      email: newUser.email,
      image: newUser.image,
    };

    const token = generateToken(tokenPayload, secretToken, jwtConfig);

    return res.status(201).json({ token });
  } catch (err) {
    console.error('Error handling POST /user request:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { register };
