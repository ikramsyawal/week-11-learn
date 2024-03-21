const express = require("express");
const app = express();
const port = 3000;
const db = require("./models/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
