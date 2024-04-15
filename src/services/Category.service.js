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

module.exports = {
  createNewCategory,
};
