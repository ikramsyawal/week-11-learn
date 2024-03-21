const todoService = require("../services/todoService");

class TodoController {
  // get all todo
  static findAll = async (req, res, next) => {
    try {
      const todos = await todoService.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  };

  // get todo by id detailed
  static findOne = async (req, res, next) => {
    try {
      const id = req.params.id;
      const todo = await todoService.findOne(id);
      res.status(200).json(todo);
    } catch (err) {
      next(err);
    }
  };

  // create todo
  static create = async (req, res, next) => {
    try {
      const body = req.body;
      const todo = await todoService.create(body);
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  };

  // update todo
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body,
      };
      const todo = await todoService.update(params);
      res.status(200).json({ message: "Todo updated successfully" });
    } catch (err) {
      next(err);
    }
  };

  // delete todo
  static destroy = async (req, res, next) => {
    try {
      const id = req.params.id;
      await todoService.destroy(id);
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TodoController;
