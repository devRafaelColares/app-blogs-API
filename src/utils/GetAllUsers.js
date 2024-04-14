const { User } = require('../models'); // Ajuste o caminho conforme necessário

const getAllUsers = async () => {
  try {
    // Use o método findAll do modelo User para buscar todos os usuários
    const users = await User;
        
    // Retorne a lista de usuários obtida do banco de dados
    return users;
  } catch (err) {
    console.error('Error fetching users:', err);
    throw new Error('Failed to fetch users');
  }
};

module.exports = { getAllUsers };