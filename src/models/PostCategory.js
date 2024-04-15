const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'BlogPost',
                key: 'id',
            },
            field: 'post_id',
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'id',
            },
            field: 'category_id',
        },
    }, {
        modelName: 'PostCategory',
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategory.associate = function(models) {
        models.BlogPost.belongsToMany(models.Category, {
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'categoryList'
        });

        models.Category.belongsToMany(models.BlogPost, {
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'posts',
        });
    };

    return PostCategory;
};
