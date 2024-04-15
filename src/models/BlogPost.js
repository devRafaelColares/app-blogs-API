const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
            field: 'user_id',
        },
        published: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'BlogPost',
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    });

    BlogPost.associate = function(models) {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
        
        BlogPost.belongsToMany(models.Category, {
            through: models.PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'categories'
        });
    };
    

    return BlogPost;
};
