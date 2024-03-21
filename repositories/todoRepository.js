const { Todo } = require("../models");

class TodoRepository {
  static getAllTodos = async (params) => {
    try {
      const todos = await Todo.findAll(params);
      return todos;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TodoRepository;
