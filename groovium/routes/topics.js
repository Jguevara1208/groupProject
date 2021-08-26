const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Topic, Story, User } = require("../db/models");


router.get('/', asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    res.render('topics-list', { topics })
}))


router.get('/:topicId', asyncHandler(async (req, res) => {
    const topicId = req.params.topicId
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

    const followers = followersArr.topicLikes
    const newStories = stories.map(story => {
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
    res.render('topic-page', { topic, newStories, followers })
  }));
module.exports = router;
