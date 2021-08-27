const express = require('express');
const router = express.Router();
const { asyncHandler} = require("../utils")
const { Story, User, Topic, Comment, Like} = require("../db/models");
const { requireAuth } = require("../auth")
const { Op } = require("sequelize");


router.get('/:storyId', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId
  const storyId = req.params.storyId
  const story = await Story.findByPk(storyId)
  const user = await User.findByPk(story.userId)
  const topic = await Topic.findByPk(story.topicId)
  const like = await Like.findOne({
    where:{
      [Op.and]: [{ userId: userId }, { storyId: storyId }]
    }
  })

  const commentsArr = await Comment.findAll({
    include: User,
    where: {
      storyId
    },
    order: [['createdAt', 'DESC']]
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
  res.render('stories', { like, userId, story, user, topic, comments, commentNumber})
}));

router.get('/:id/comments', asyncHandler(async(req, res) => {}))
router.post('/:id/comments', asyncHandler(async(req, res) => {}))

router.delete('/:id/comments/:commentId', asyncHandler(async(req, res) => {
  const commentId = req.params.commentId
  const comment = await Comment.findByPk(commentId)
  await comment.destroy()
}))

router.patch('/:id/comments', asyncHandler(async(req, res) => {}))


router.get('/:id/likes', asyncHandler(async(req, res) => {
  const storyId = req.params.id
  const likes = await Like.findAll({
    where: {
      storyId
    }
  })

  res.json(likes.length)
}))


router.post('/:id/likes', asyncHandler(async(req, res) => {
  const storyId = req.params.id
  const userId = req.session.auth.userId
  await Like.create({
    userId,
    storyId
  })
  const likes = await Like.findAll({
    where: {
      storyId
    }
  })
  res.json(likes.length)
}))

router.delete('/:id/likes', asyncHandler(async(req, res) => {
  const storyId = req.params.id
  const userId = req.session.auth.userId
  const like = await Like.findOne({
    where: {
      [Op.and]: [{ userId: userId }, { storyId: storyId }]
    }
  })
  await like.destroy()

  const likes = await Like.findAll({
    where: {
      storyId
    }
  })

  res.json(likes.length)
}))


router.post('/:storyId/comments/new', asyncHandler(async (req, res) => {
  const { content } = req.body
  const userId = req.session.auth.userId
  const storyId = req.params.storyId
  const newComment = await Comment.create({
    content,
    userId,
    storyId
  })
  const user = await User.findByPk(userId)

  res.json({newComment, user})
}))

module.exports = router;
