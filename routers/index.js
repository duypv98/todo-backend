const express = require("express");
const { todoRouter } = require("./todos.router");
const router = express.Router();

router.use(todoRouter);

module.exports = {
  apis: router
}