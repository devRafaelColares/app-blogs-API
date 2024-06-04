const { Post, Category } = require('../models');
const { Op } = require('sequelize');

const createNewPost = async ({ title, content, categoryIds, userId }) => {
  // Inicia uma transação para garantir a atomicidade das operações
  const transaction = await Post.sequelize.transaction();

  try {
    // Cria o novo post e vincula ao usuário autenticado
    const newPost = await Post.create(
      {
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(),
      },
      { transaction }
    );

    // Vincula as categorias fornecidas ao novo post
    // `addCategories` é uma função gerada automaticamente pelo Sequelize
    await newPost.addCategories(categoryIds, { transaction });

    // Confirma a transação se tudo deu certo
    await transaction.commit();

    // Retorna o novo post criado
    return newPost;
  } catch (error) {
    // Reverte a transação se houve algum erro
    await transaction.rollback();
    
    // Repassa o erro para ser tratado pelo controlador
    throw error;
  }
};

module.exports = {
  createNewPost,
};
