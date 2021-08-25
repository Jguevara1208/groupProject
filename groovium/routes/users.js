const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story} = require('../db/models');


    // user.firstName

    // each following in user.followings
    //     following.id
    //     following.avatarUrl

    // each topic in user.likedTopics
    //     topic.topic
    //     topic.id

    // each story in feedStories
    //     story.User.firstName
    //     story.Topic.id
    //     story.Topic.topic
    //     story.title
    //     story.summary

    // each myStory in myStories
    //     myStory.title


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

    console.log(user.likedTopics[0])

    const followingsIds = user.followings.map(user => user.id)
    const feedStories = await Story.findAll({
        limit: 5,
        include: [User, Topic],
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

router.get('/my-stories', asyncHandler(async (req, res) => {
    res.render('my-stories')
}))

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    const story = await Story.findAll({
        where: {
            userId: userId
        }
    });

    const topics = await Topic.findAll()
    res.render('user-profile-page', { story, user, topics })
}));



module.exports = router;
