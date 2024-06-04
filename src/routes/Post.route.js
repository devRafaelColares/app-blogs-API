const express = require('express');
const validateJWT = require('../auth/validateJWT');
const postController = require('../controllers/Post.controller');
const validateCategories = require('../middlewares/validateCategoriesDb');
const validateFields = require('../middlewares/validateFields');
const decodeToken = require('../auth/decodeToken');

const route = express.Router();

route.post(
  '/',
  decodeToken,
  validateJWT,
  validateCategories,
  validateFields,
  postController.createPost,
);

module.exports = route;