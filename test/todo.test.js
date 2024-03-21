const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const BASE_URL = "/api/todo";

beforeAll(async () => {
  try {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          id: 1005,
          title: "Complete project week 1005",
          description: "create api and then jest 1005",
          due_date: "2024-03-24T12:00:00.000Z",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1006,
          title: "Complete project week 1006",
          description: "create api and then jest 1006",
          due_date: "2024-03-24T12:00:00.000Z",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1007,
          title: "Complete project week 1007",
          description: "create api and then jest 1007",
          due_date: "2024-03-24T12:00:00.000Z",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1008,
          title: "Complete project week 1008",
          description: "create api and then jest 1008",
          due_date: "2024-03-24T12:00:00.000Z",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1009,
          title: "Complete project week 1009",
          description: "create api and then jest 1009",
          due_date: "2024-03-24T12:00:00.000Z",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  } catch (err) {
    console.log(err);
  }
});

afterAll(async () => {
  try {
    await queryInterface.bulkDelete("Todos", null, {});
  } catch (err) {
    console.log(err);
  }
});

describe("get todo list in /api/todo", () => {
  it("should return list of todos", (done) => {
    request(app)
      .get(`${BASE_URL}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        const data = body;
        expect(data.length).toEqual(5);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return todo by id detailed", (done) => {
    request(app)
      .get(`${BASE_URL}/1005`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        const data = body;
        const {
          id,
          title,
          description,
          due_date,
          status,
          createdAt,
          updatedAt,
        } = data;
        expect(id).toEqual(1005);
        expect(title).toEqual("Complete project week 1005");
        expect(description).toEqual("create api and then jest 1005");
        expect(due_date).toEqual("2024-03-24T12:00:00.000Z");
        expect(status).toEqual("pending");
        expect(createdAt).toBeTruthy();
        expect(new Date(createdAt)).toBeInstanceOf(Date);
        expect(updatedAt).toBeTruthy();
        expect(new Date(updatedAt)).toBeInstanceOf(Date);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("create todo in /api/todo", () => {
  it("should create todo", (done) => {
    request(app)
      .post(`${BASE_URL}`)
      .send({
        title: "Complete project week 1010",
        description: "create api and then jest 1010",
        due_date: "2024-03-24T12:00:00.000Z",
        status: "pending",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        const { body } = response;
        const data = body;
        const {
          id,
          title,
          description,
          due_date,
          status,
          createdAt,
          updatedAt,
        } = data;
        expect(id).toBeTruthy();
        expect(title).toEqual("Complete project week 1010");
        expect(description).toEqual("create api and then jest 1010");
        expect(due_date).toEqual("2024-03-24T12:00:00.000Z");
        expect(status).toEqual("pending");
        expect(createdAt).toBeTruthy();
        expect(new Date(createdAt)).toBeInstanceOf(Date);
        expect(updatedAt).toBeTruthy();
        expect(new Date(updatedAt)).toBeInstanceOf(Date);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return status field cannot be null", (done) => {
    request(app)
      .post(`${BASE_URL}`)
      .send({
        title: "Complete project week 1010",
        description: "create api and then jest 1010",
        due_date: "2024-03-24T12:00:00.000Z",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        const { body } = response;
        const data = body;
        expect(data.message).toEqual("Todo.status cannot be null");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("update todo in /api/todo", () => {
  it("should update todo", (done) => {
    request(app)
      .put(`${BASE_URL}/1005`)
      .send({
        title: "Complete project week 1020",
        description: "create api and then jest 1020",
        due_date: "2024-03-24T12:00:00.000Z",
        status: "completed",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        const data = body;
        expect(data.message).toEqual("Todo updated successfully");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("delete todo in /api/todo", () => {
  it("should delete todo", (done) => {
    request(app)
      .delete(`${BASE_URL}/1005`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;
        const data = body;
        expect(data.message).toEqual("Todo deleted successfully");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return todo not found", (done) => {
    request(app)
      .delete(`${BASE_URL}/1005`)
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        const { body } = response;
        const data = body;
        expect(data.message).toEqual("Todo not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
