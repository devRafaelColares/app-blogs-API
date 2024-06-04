const express = require('express');
const loginRouter = require('./routes/Login.route');
const userRouter = require('./routes/User.route');
const categoriesRouter = require('./routes/Categories.route');
const postRouter = require('./routes/Post.route');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
