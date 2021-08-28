var express = require('express');
const { User, Story, Topic, Comment, Bookmark} = require('../db/models');
const { asyncHandler } = require('../utils');
const { Op } = require('sequelize')

var router = express.Router();

router.post('/:storyId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const storyId = req.params.storyId
    const bookmark = await Bookmark.create({
        userId,
        storyId
    })

    res.json('success')
}))


router.delete('/:storyId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const storyId = req.params.storyId
    const bookmark = await Bookmark.findOne({
        where: {
            [Op.and]: [{userId}, {storyId}]
        }
    })

    bookmark.destroy()
    res.json('success')
})) 

module.exports = router;