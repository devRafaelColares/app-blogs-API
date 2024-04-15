const express = require('express');
const validateJWT = require('../auth/validateJWT');
const categoriesController = require('../controllers/Categories.controller');
const checkValidateCategories = require('../middlewares/checkValidateCategories');

const route = express.Router();

route.get(
  '/',
  validateJWT,
  categoriesController.getAllCategories,
);

route.post(
  '/',
  validateJWT,
  checkValidateCategories,
  categoriesController.createCategory,
);

module.exports = route;