const { getByEmail } = require('../services/User.service');

const checkEmailExists = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await getByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    next();
  } catch (error) {
    console.error('Error checking email existence:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkEmailExists;
