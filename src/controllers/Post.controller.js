const postService = require('../services/Post.service');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req; // Usuário autenticado armazenado no req pelo middleware validateToken

    // Chama a função createNewPost com os dados necessários
    const newPost = await postService.createNewPost({ title, content, categoryIds, userId });
    
    // Responde com o novo post e o status 201
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPost,
};
