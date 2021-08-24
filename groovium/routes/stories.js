const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Story, User, Topic } = require("../db/models");

router.get('/:storyId', asyncHandler(async (req, res) => {
  const storyId = req.url.split("/")[1]
  const story = await Story.findByPk(storyId)
  const user = await User.findByPk(story.userId)
  const topic = await Topic.findByPk(story.topicId)
  // console.log("THE STORY --------> ", story)
  // console.log("THE USER --------> ", user)
  // console.log("THE TOPIC --------> ", topic)
  res.render('stories', { story, user, topic })
}));

module.exports = router;
