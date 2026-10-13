const express = require("express");
const postsController = require("../controllers/posts.controller");

const router = express.Router();

// [GET] /api/posts
router.get("/", postsController.getAll);

// [GET] /api/posts/123
router.get("/:id", postsController.getDetail);

// [POST] /api/posts
router.post("/", postsController.create);

// [PUT] /api/posts/123
router.put("/:id", postsController.update);

// [DELETE] /api/posts/123
router.delete("/:id", postsController.deletePost);

module.exports = router;