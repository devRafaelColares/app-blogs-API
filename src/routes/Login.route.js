const express = require('express');

const route = express.Router();
const loginController = require('../controller/Login.controller');

route.post(
  '/',
  loginController,
);

module.exports = route;