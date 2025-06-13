const router = require('express').Router();
const authMiddleware = require('./../middlewares/authMiddleware');
const Chat = require('./../models/chat');


router.post('/create-new-chat', authMiddleware, async (req, respose) => {
    try {
        const chat = new Chat(req.body);
        const savedChat = await chat.save();
        respose.status(201).send({
            message: 'chat created successfully',
            success: true,
            data: savedChat
        })

    } catch (error) {
        respose.status(400).send({
            message: error.message,
            success: false
        });
    }
});

router.get('/get-all-chats', authMiddleware, async (req, respose) => {
    try {
        const allChats = await Chat.find({members: {$in: req.userID}})
        respose.status(200).send({
            message: 'chat fetched successfully',
            success: true,
            data: allChats
        })

    } catch (error) {
        respose.status(400).send({
            message: error.message,
            success: false
        });
    }
});

module.exports = router;