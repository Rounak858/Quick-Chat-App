
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const authRouter = require('./controllers/authController');
const userRouter = require('./controllers/userController');
const chatRouter = require('./controllers/chatController')
const messageRouter = require('./controllers/messageController')

app.use('/api/auth', authRouter); //use auth controller router
app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);
app.get('/api', (req, res) => {
    res.status(200).send({
        message: 'hello',
        success: true
    });
});
module.exports = app;

// ,
//   "proxy": "http://localhost:5000"