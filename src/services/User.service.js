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

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll(
      { attributes: { exclude: ['password'] } },
    );
  
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

const getByUserId = async (userId) => {
  const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });

  if (!user) {
    return null;    
  }
  return user;
};
module.exports = {
  getByEmail,
  createUser,
  getAllUsers,
  getByUserId,
};
