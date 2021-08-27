const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story} = require('../db/models');
const { requireAuth } = require("../auth")
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true });



router.get('/', requireAuth, asyncHandler(async (req, res) => {

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

router.get('/my-stories', requireAuth, asyncHandler(async (req, res) => {
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

router.get('/my-stories/new', requireAuth, asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    // console.log(topics)
    res.render('new-story', { topics })
}));


router.post('/my-stories/new', asyncHandler(async(req, res) => {


    const { title, body, storyImgUrl, topicId } = req.body;
    const userId = req.session.auth.userId

    console.log('-------------------------------------------------')
    console.log(req.body)
    console.log(userId)

    console.log(body, "--------------------------------")
    console.log(typeof(body))

    const summary = body.slice(0, 100)

    const bodysize = body.length
    const readTimeMinutes = Math.floor(bodysize/190)

    //change to build and save later after validations
    const post = await Story.create({
        userId,
        topicId,
        summary,
        title,
        readTimeMinutes,
        body,
        storyImgUrl
    });


    res.redirect('/users/my-stories')

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

router.post('/:id/follow', asyncHandler( async (req, res) => {}))
router.delete('/:id/follow', asyncHandler( async (req, res) => {}))
router.post('/my-stories/:id/delete', asyncHandler( async (req, res) => {}))

//Edit
router.get('/my-stories/:storyId/edit', asyncHandler(async (req, res) => {
    const storyId = req.url.split('/')[2];
    const userId = req.session.auth.userId;
    const story = await Story.findByPk(storyId)
    const topics = await Topic.findAll()
    // console.log(topics)
    res.render('edit-story', { topics, story })
  }));

  router.post('/my-stories/:storyId/edit', asyncHandler(async(req, res) => {

    const { title, body, storyImgUrl, topicId } = req.body;
    const userId = req.session.auth.userId
    const storyId = req.url.split('/')[2];
    const story = await Story.findByPk(storyId)

    console.log('-------------------------------------------------')
    console.log(req.body)
    console.log(userId)

    console.log(body, "--------------------------------")
    console.log(typeof(body))

    const summary = body.slice(0, 100)

    const bodysize = body.length
    const readTimeMinutes = Math.floor(bodysize/190)


    //change to build and save later after validations
    console.log('----------------------------------------------------------------------------------------------------------------')

    await story.update({
      topicId,
      summary,
      title,
      readTimeMinutes,
      body,
      storyImgUrl
  });

    res.redirect('/users/my-stories')

  }));


module.exports = router;
