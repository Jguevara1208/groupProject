const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Topic } = require("../db/models");

router.get('/', asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    res.render('topics-list', { topics })
}))


router.get('/:topicId', asyncHandler(async (req, res) => {
    const topicId = req.url.split("/")[1]
    const topic = await Topic.findByPk(topicId)
    console.log(topic.imageUrl)
    res.render('topic-page', { topic })
  }));
module.exports = router;
