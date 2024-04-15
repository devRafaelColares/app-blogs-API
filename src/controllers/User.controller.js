const userService = require('../services/User.service');
const { generateToken, secretToken, jwtConfig } = require('../utils/GenerateToken');

const register = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.createUser({ displayName, email, password, image });

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

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getByUserId(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' }); 
  }
  return res.status(200).json(user);
};

module.exports = {
  register,
  getAll,
  getById,
};
