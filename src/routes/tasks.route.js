const express = require("express");
const taskControllers = require("../controllers/task.controller");
const taskCreateValidation = require("../middlewares/taskCreateValidation.middleware");

const router = express.Router();

// [GET] /api/tasks
router.get("/", taskControllers.getAll)

// [GET] /api/tasks/123
router.get("/:id", taskControllers.getDetail)

// [POST] /api/tasks
router.post("/", taskCreateValidation, taskControllers.create)

// [POST] /api/tasks/123/toggle
router.post("/:id/toggle", taskControllers.toggle)


module.exports = router;
