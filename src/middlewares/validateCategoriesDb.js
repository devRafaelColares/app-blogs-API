const { Category } = require('../models');

const validateCategories = async (req, res, next) => {
  const { categoryIds } = req.body;

  const existingCategories = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });

  if (existingCategories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'One or more "categoryIds" not found' });
  }

  next();
};

module.exports = validateCategories;