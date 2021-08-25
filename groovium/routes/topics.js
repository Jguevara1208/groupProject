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

    res.render('topic-page', { topic, stories, followers })
  }));
module.exports = router;
