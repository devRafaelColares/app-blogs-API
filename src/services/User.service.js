const { User } = require('../models');

const getByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error(`Error fetching user by email ${email}:`, error);
    throw error;
  }
};

module.exports = {
  getByEmail,
};
