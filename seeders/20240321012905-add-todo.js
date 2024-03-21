"use strict";

const fs = require("fs");
let data = fs.readFileSync("./todos.json", "utf-8");

data = JSON.parse(data).map((element) => {
  return {
    title: element.title,
    description: element.description,
    due_date: element.due_date,
    status: element.status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
