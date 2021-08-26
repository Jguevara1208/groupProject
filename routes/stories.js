const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Story, User, Topic, Comment } = require("../db/models");

router.get('/:storyId', asyncHandler(async (req, res) => {
  const storyId = req.params.storyId
  const story = await Story.findByPk(storyId)
  const user = await User.findByPk(story.userId)
  const topic = await Topic.findByPk(story.topicId)
  const comments = await Comment.findAll({
    where: {
      storyId
    }
  })

  const commentNumber = comments.length

  console.log(commentNumber)
  console.log(comments)
  // console.log("THE STORY --------> ", story)
  // console.log("THE USER --------> ", user)
  // console.log("THE TOPIC --------> ", topic)
  res.render('stories', { story, user, topic, comments, commentNumber})
}));

module.exports = router;
