const todoService = require("../services/todoService");

class TodoController {
  // get all todo
  static getAllTodos = async (req, res, next) => {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (err) {
      throw err;
    }
  };
  // create todo
  static createTodo = async (req, res, next) => {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TodoController;
