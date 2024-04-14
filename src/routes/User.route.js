const express = require('express');
const userController = require('../controllers/User.controller');
const validateUserData = require('../middlewares/validateUserData');
const checkEmailExists = require('../middlewares/checkEmailExists');
const validateJWT = require('../auth/validateJWT');

const route = express.Router();

route.get(
  '/',
  validateJWT,
  userController.getAll,
);

route.post(
  '/',
  validateUserData,
  checkEmailExists,
  userController.register,
);

module.exports = route;
