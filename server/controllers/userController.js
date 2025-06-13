const router = require('express').Router();
const User = require('./../models/user');
const authMiddleware = require('./../middlewares/authMiddleware')

//Get details of current logged-in user
router.get('/get-logged-user',authMiddleware ,async (req,response) => {
    try{
        const user = await User.findOne({_id: req.userID});

        response.send({
            message: 'user fetched successfully',
            success: true,
            data : user
        });

    } catch(error) {
        response.status(400).send({
            message: error.message,
            success: false,
        });
    }
});
//Get details of all users
router.get('/get-all-users',authMiddleware ,async (req,response) => {
    try{
        const allUsers = await User.find({_id: {$ne: req.userID}});

        response.send({
            message: ' All user fetched successfully',
            success: true,
            data : allUsers
        });
    } catch(error) {
        response.status(400).send({
            message: error.message,
            success: false,
        });
    }
});
module.exports = router; 