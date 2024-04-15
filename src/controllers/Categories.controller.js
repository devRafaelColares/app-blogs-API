const categoryService = require('../services/Category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await categoryService.createNewCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllCategories = async (_req, res) => {
  const allCategories = await categoryService.getAllCategories();
  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};
