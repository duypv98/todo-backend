const express = require("express");
const todosService = require("../services/todos.service");
const asyncHandler = require("../utils/asyncHandler");

const router = express.Router();

router.route("/todos")
  .get(asyncHandler(async (req, res) => {
    const piority = req.query.piority;
    const priorityArr = priority.split(",");
    const data = todosService.getList({ piority: priorityArr });
    return res.json(data);
  }))
  .post(asyncHandler(async (req, res) => {
    const newItem = todosService.create(req.body);
    return res.json(newItem);
  }));

router.route("/todos/:id")
  .get(asyncHandler(async (req, res) => {
    const data = todosService.get(req.params.id);
    return res.json(data);
  }))
  .patch(asyncHandler(async (req, res) => {
    const data = todosService.update({ id: req.params.id, ...req.body });
    return res.json(data);
  }))
  .delete(asyncHandler(async (req, res) => {
    const success = todosService.delete({ id: req.params.id });
    return res.json({ success });
  }));

module.exports = {
  todoRouter: router
}
