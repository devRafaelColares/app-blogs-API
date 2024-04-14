const express = require('express');

const route = express.Router();
const loginController = require('../controllers/Login.controller');

route.post(
  '/',
  loginController,
);

module.exports = route;