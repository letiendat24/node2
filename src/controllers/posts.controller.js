const postModel = require("../models/post.model");

const getAll = async (req, res) => {
    try {
        const posts = await postModel.findAll();
        res.success(posts);
    } catch (e) {
        res.error({ message: e.message });
    }
};

const getDetail = async (req, res) => {
    try {
        const post = await postModel.findOne(req.params.id);
        if (!post) {
            return res.error({ message: "Post not found" }, 404);
        }
        res.success(post);
    } catch (e) {
        res.error({ message: e.message });
    }
};

const create = async (req, res) => {
    try {
        const newPost = {
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
        };

        const result = await postModel.createPost(newPost);
        res.success({ id: result.insertId, ...newPost }, 201);
    } catch (e) {
        res.error({ message: e.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postModel.findOne(id);
        if (!post) {
            return res.error({ message: "Post not found" }, 404);
        }

        const updateData = {
            title: req.body.title ?? post.title,
            slug: req.body.slug ?? post.slug,
            description: req.body.description ?? post.description,
            content: req.body.content ?? post.content,
        };

        await postModel.updatePost(id, updateData);
        const updatedPost = await postModel.findOne(id);
        res.success(updatedPost);
    } catch (e) {
        res.error({ message: e.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await postModel.findOne(req.params.id);
        if (!post) {
            return res.error({ message: "Post not found" }, 404);
        }

        await postModel.deletePost(req.params.id);
        res.success({ message: "Post deleted successfully" });
    } catch (e) {
        res.error({ message: e.message });
    }
};

module.exports = { getAll, getDetail, create, update, deletePost };
