const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.findAll);
router.get("/:id", todoController.findOne);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.destroy);

module.exports = router;
