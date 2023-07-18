const { BlogPost, PostCategory, sequelize } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
    const result = await sequelize.transaction(async (t) => {
        const newBlogPost = await BlogPost.create({
            title, content, userId, published: new Date(),
        }, { transaction: t });

        const postCategories = categoryIds.map(async (e) => {
            await PostCategory
                .create({ postId: newBlogPost.id, categoryId: e }, { transaction: t });
        });
        await Promise.all(postCategories);
        return newBlogPost;
    });
    return result;
};

module.exports = {
    createPost,
};