const todoRepository = require("../repositories/todoRepository");

class TodoService {
  static getAllTodos = async (params) => {
    try {
      const todos = await todoRepository.getAllTodos(params);
      return todos;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TodoService;
