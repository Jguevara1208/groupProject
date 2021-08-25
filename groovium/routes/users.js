const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story } = require('../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const user = await User.findByPk(userId);
    // console.log(user)

    res.render('home')
}));

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.url.split("/")[1]
    const user = await User.findByPk(userId)
    const story = await Story.findAll({
        where: {
            userId: userId
        }
    });

    const topic = await Topic.findAll()

    res.render('user-profile-page', { story, user, topic })
}));



module.exports = router;
