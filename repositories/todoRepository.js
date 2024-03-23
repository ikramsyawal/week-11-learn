const { Todo } = require("../models");

class TodoRepository {
  // get all todo not detailed
  static findAll = async (params) => {
    try {
      const todos = await Todo.findAll({
        ...params,
        attributes: { exclude: ["description", "createdAt", "updatedAt"] },
        oder: [["id", "ASC"]],
      });
      return todos;
    } catch (err) {
      throw err;
    }
  };

  // find one todo detailed
  static findOne = async (params) => {
    try {
      const todos = await Todo.findOne(params);
      if (!todos) {
        throw { name: "dataNotFound", message: "Todo not found" };
      }
      return todos;
    } catch (err) {
      throw err;
    }
  };

  // create todo
  static create = async (params) => {
    try {
      const todo = await Todo.create(params);
      return todo;
    } catch (err) {
      throw err;
    }
  };

  // update todo
  static update = async (id, body) => {
    try {
      const todo = await Todo.findOne({
        where: {
          id,
        },
      });
      if (!todo) {
        throw { name: "dataNotFound", message: "Todo not found" };
      }
      await Todo.update(body, { where: { id } });
    } catch (err) {
      throw err;
    }
  };

  // delete todo
  static destroy = async (params) => {
    try {
      const todo = await Todo.findOne(params);
      if (!todo) {
        throw { name: "dataNotFound", message: "Todo not found" };
      }
      await todo.destroy();
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TodoRepository;
