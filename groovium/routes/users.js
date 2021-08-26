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

    // console.log(user.likedTopics[0])

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

    console.log(user.bookmark[0].title)
    res.render('my-stories', {user, newStories})
}))

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId
    // const header = 'this is a test'

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
        }

    ]
    });

    // console.log(user.followings[0].avatarUrl, "---------------")
    // const followingsAvatars = user.followings.map(user => user.avatarUrl)
    // console.log(user, "---------------")
    console.log(user, "---------------")


    // console.log(followingsAvatars, '<-----------')

    // const story = await Story.findAll({
    //     limit: 5,
    //     where: {
    //         userId: userId
    //     }
    // });

    res.render('user-profile-page', { user })
}));



module.exports = router;
