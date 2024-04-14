const express = require('express');
const userController = require('../controllers/User.controller');
const validateUserData = require('../middlewares/validateUserData');
const checkEmailExists = require('../middlewares/checkEmailExists');

const route = express.Router();

route.post(
  '/',
  validateUserData,
  checkEmailExists,
  userController.register,
);

module.exports = route;
