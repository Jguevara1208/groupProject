const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Story } = require("../db/models");
const { User } = require('../db/models');

router.get('/:storyId', asyncHandler(async (req, res) => {
  console.log("Are we there yet?")
  const storyId = req.url.split("/")[1]
  console.log(storyId)
  const story = await Story.findByPk(storyId)
  const user = await User.findByPk(story.userId)
  console.log("THE USER --------> ", story)
  res.render('stories', { story, user })
}));


module.exports = router;
