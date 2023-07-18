const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true },
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