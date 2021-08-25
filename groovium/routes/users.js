const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story} = require('../db/models');

router.get('/', asyncHandler(async (req, res) => {

    const userId = req.session.auth.userId;

    const user = await User.findByPk(userId, {
        include: [{
            model: User,
            as: 'followings',
        }, {
            model: Topic,
            as: 'likedTopics'
        }]
    });

    const followingsIds = user.followings.map(user => user.id)
    const feedStories = await Story.findAll({
        limit: 5,
        where: {
            userId: followingsIds,
        }
    })

    const myStories = await Story.findAll({
        limit: 5,
        where: {
            userId
        }
    })
    
    res.render('home', {user, myStories, feedStories})
}));




module.exports = router;
