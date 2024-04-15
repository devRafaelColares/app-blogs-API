const express = require('express');
const validateJWT = require('../auth/validateJWT');
const categoriesController = require('../controllers/Categories.controller');

const route = express.Router();

route.post(
  '/',
  validateJWT,
  categoriesController.createCategory,
);

module.exports = route;