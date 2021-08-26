const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story} = require('../db/models');


router.get('/delete', asyncHandler(async (req, res) => {
    res.render('/delete')
}))


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
        include: [User, Topic],
        where: {
            userId: followingsIds,
        }
    })

    const newStories = feedStories.map(story => {
        const date = story.createdAt
        const month = date.getMonth() + 1
        const day = date.getDate()
        const newDate = `${month}-${day}`

        return {
          id: story.id,
          title: story.title,
          userId: story.User.id,
          avatarUrl: story.User.avatarUrl,
          firstName: story.User.firstName,
          lastName: story.User.lastName,
          summary: story.summary,
          date: newDate,
          readTimeMinutes: story.readTimeMinutes,
          topicId: story.topicId,
          topic: story.Topic.topic,
          storyImgUrl: story.storyImgUrl
        }
      })

    const myStories = await Story.findAll({
        limit: 5,
        where: {
            userId
        }
    })

    res.render('home', {user, myStories, newStories})
}));

router.get('/my-stories', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = await User.findByPk(userId, {
        include: [{
            model: Story,
            limit: 5,
            include: [User, Topic]
        },
        {
            model: Story,
            as: 'bookmark'
        }
    ]
    })

    const newStories = user.Stories.map(story => {
        const date = story.createdAt
        const month = date.getMonth() + 1
        const day = date.getDate()
        const newDate = `${month}-${day}`

        return {
            id: story.id,
            title: story.title,
            userId: story.User.id,
            avatarUrl: story.User.avatarUrl,
            firstName: story.User.firstName,
            lastName: story.User.lastName,
            summary: story.summary,
            date: newDate,
            readTimeMinutes: story.readTimeMinutes,
            topicId: story.topicId,
            topic: story.Topic.topic,
            storyImgUrl: story.storyImgUrl
        }
    })

    console.log(user.bookmark)
    res.render('my-stories', {user, newStories})
}))

router.get('/my-stories/new', asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    console.log(topics)
    res.render('new-story', { topics })
}));

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId

    const user = await User.findByPk(userId, {
        limit: 5,
        include: [{
            model: User,
            as: 'followings',
        }, {
            model: Topic,
            as: 'likedTopics',
        }, {
            model: Story,
            include: [User, Topic]
        }
    ]
    });

    const newStories = user.Stories.map(story => {
        const date = story.createdAt
        const month = date.getMonth() + 1
        const day = date.getDate()
        const newDate = `${month}-${day}`

        return {
            id: story.id,
            title: story.title,
            userId: user.id,
            avatarUrl: user.avatarUrl,
            firstName: user.firstName,
            lastName: user.lastName,
            summary: story.summary,
            date: newDate,
            readTimeMinutes: story.readTimeMinutes,
            topicId: story.topicId,
            topic: story.Topic.topic,
            storyImgUrl: story.storyImgUrl
        }
    })

    if (req.params.userId == req.session.auth.userId) {
        res.redirect('/users/my-stories')
    } else {
        res.render('other-profiles-page', { user, newStories })
    }

}));



module.exports = router;
