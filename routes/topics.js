const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Topic, Story, User, LikedTopic, Bookmark } = require("../db/models");
const { requireAuth } = require("../auth")
const { Op } = require("sequelize");



router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const topics = await Topic.findAll()
    const likedTopics = await LikedTopic.findAll({ where: userId })
    topics.forEach(topic => {
        likedTopics.forEach(likedTopic => {
            if (topic.id === likedTopic.topicId) {
                topic['follows'] = true
            }
        })
    })
    res.render('topics-list', { topics })
}))


router.get('/:topicId', requireAuth, asyncHandler(async (req, res) => {
    const topicId = req.params.topicId
    const userId = req.session.auth.userId
    const follow = await LikedTopic.findOne({
        where: {
            [Op.and]: [{ userId }, { topicId }]
        }
    })
    const topic = await Topic.findByPk(topicId)
    const stories = await Story.findAll({
        include: [User, Topic],
        where: {
            topicId
        }
    })
    const followersArr = await Topic.findOne({
        where: {id: topicId} ,
        include: {
            model: User,
            as: 'topicLikes',

    }})

    const bookmarks = await Bookmark.findAll({
        where: { userId }
    })
    
    const followers = followersArr.topicLikes
    const newStories = stories.map(story => {
        const date = story.createdAt
        const month = date.getMonth() + 1
        const day = date.getDate()
        const newDate = `${month}-${day}`
        
        let bookmarked = false

        bookmarks.forEach(bookmark => {
            if (bookmark.storyId === story.id) bookmarked = true
        })
        
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
            storyImgUrl: story.storyImgUrl,
            bookmarked
        }
    })
    res.render('topic-page', { topic, newStories, followers , follow})
  }));


  router.post('/:topicId/like', asyncHandler(async(req, res) => {
    const topicId = req.params.topicId
    const userId = req.session.auth.userId
    await LikedTopic.create({
        topicId,
        userId
    })
    res.json('success')
  }))

  router.delete('/:topicId/like', asyncHandler(async(req, res) => {
    const topicId = req.params.topicId
    const userId = req.session.auth.userId
    const likedTopic = await LikedTopic.findOne({
        where: {
            [Op.and]: [{ userId }, { topicId }]
        }
    })

    likedTopic.destroy()
    res.json('success')
  }))
module.exports = router;
