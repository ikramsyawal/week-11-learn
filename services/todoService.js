const todoRepository = require("../repositories/todoRepository");

class TodoService {
  // get all todos
  static findAll = async (params) => {
    try {
      const todos = await todoRepository.findAll(params);
      return todos;
    } catch (err) {
      throw err;
    }
  };

  // get todo by id detailed
  static findOne = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      const todo = await todoRepository.findOne(filterOption);
      return todo;
    } catch (err) {
      throw err;
    }
  };

  // create todo
  static create = async (params) => {
    try {
      const todo = await todoRepository.create(params);
      return todo;
    } catch (err) {
      throw err;
    }
  };

  // update todo
  static update = async (params) => {
    try {
      const { id, body } = params;
      await todoRepository.update(id, body);
    } catch (err) {
      throw err;
    }
  };

  // delete todo
  static destroy = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      await todoRepository.destroy(filterOption);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TodoService;
