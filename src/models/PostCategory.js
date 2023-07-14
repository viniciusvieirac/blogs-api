const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    },
        {
            tableName: 'posts_categories',
            underscored: true,
            timestamps: false,
        },
    );

    PostCategoryTable.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'blogPostsId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'blogPosts',
            through: PostCategoryTable,
            foreignKey: 'blogPostsId',
            otherKey: 'categoryId',
        });
    };
    return PostCategoryTable;
};


module.exports = PostCategorySchema;