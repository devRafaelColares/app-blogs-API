const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Category',
        tableName: 'categories',
        underscored: true,
    });

    Category.associate = function(models) {
        Category.belongsToMany(models.BlogPost, {
            through: models.PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'categoriesPost'
        });
    };
    

    return Category;
};