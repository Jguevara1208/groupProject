const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Story, User, Topic, Comment } = require("../db/models");


router.get('/:storyId', asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId
  const storyId = req.params.storyId
  const story = await Story.findByPk(storyId)
  const user = await User.findByPk(story.userId)
  const topic = await Topic.findByPk(story.topicId)
  const commentsArr = await Comment.findAll({
    include: User,
    where: {
      storyId
    }
  })
  const comments = commentsArr.map(comment => {
    const date = comment.createdAt
    const month = date.getMonth() + 1
    const day = date.getDate()
    const newDate = `${month}-${day}`

    return {
      id: comment.id,
      content: comment.content,
      userId: comment.User.id,
      avatarUrl: comment.User.avatarUrl,
      firstName: comment.User.firstName,
      lastName: comment.User.lastName,
      date: newDate,
    }
  })
  const commentNumber = comments.length
  console.log(commentsArr)
  res.render('stories', { userId, story, user, topic, comments, commentNumber})
}));

module.exports = router;
