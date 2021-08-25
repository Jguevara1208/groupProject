const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Topic, Story, User } = require("../db/models");


router.get('/', asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    res.render('topics-list', { topics })
}))

router.get('/:topicId', asyncHandler(async (req, res) => {
    const topicId = req.url.split("/")[1]
    const topic = await Topic.findByPk(topicId)
    const stories = await Story.findAll({
        where: {
            topicId
        }
    })
    const followers = await User.findAll({
        include: {
            model: Topic,
            as: "topicId"
    }})
    console.log(followers, "<----- followers")
    res.render('topic-page', { topic, stories })
  }));
module.exports = router;
