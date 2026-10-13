const pool = require("../config/database");

class Post {
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM posts WHERE deleted_at IS NULL');
        return rows;
    }

    async findOne(id) {
        const [rows] = await pool.query('SELECT * FROM posts WHERE id = ? AND deleted_at IS NULL', [id]);
        return rows[0];
    }

    async createPost(post) {
        const [rows] = await pool.query(
            'INSERT INTO posts (title, slug, description, content) VALUES (?, ?, ?, ?)',
            [post.title, post.slug, post.description, post.content]
        );
        return rows;
    }

    async updatePost(id, post) {
        const [rows] = await pool.query(
            'UPDATE posts SET title = ?, slug = ?, description = ?, content = ? WHERE id = ? AND deleted_at IS NULL',
            [post.title, post.slug, post.description, post.content, id]
        );
        return rows;
    }

    async deletePost(id) {
        const [rows] = await pool.query(
            'UPDATE posts SET deleted_at = CURRENT_TIMESTAMP WHERE id = ? AND deleted_at IS NULL',
            [id]
        );
        return rows;
    }

}

module.exports = new Post();