const { Category } = require('../models');

const createNewCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });

    return newCategory;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll({
    order: [['id', 'ASC']],
  });
  return allCategories;
};

module.exports = {
  createNewCategory,
  getAllCategories,
};
