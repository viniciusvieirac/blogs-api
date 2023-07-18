const { PostService, CategoryService } = require('../service');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { data } = req.payload;
    const categories = await
        CategoryService.getAllCategories();
    const categoriesId = categories.map(({ id }) => id);
    const allCategories = categoryIds.every((id) => categoriesId.includes(id));
    if (!allCategories) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    const newPost = await PostService.createPost(title, content, data.id, categoryIds);
    return res.status(201).json(newPost);
};

module.exports = {
    createPost,
};