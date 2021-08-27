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

//Edit
router.get('/:storyId/edit', asyncHandler(async (req, res) => {
  const storyId = req.url.split('/')[1];
  const userId = req.session.auth.userId;
  const story = await Story.findByPk(storyId)
  const topics = await Topic.findAll()
  // console.log(topics)
  res.render('edit-story', { topics, story })
}));

router.post('/my-stories/edit', asyncHandler(async(req, res) => {

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

module.exports = router;
