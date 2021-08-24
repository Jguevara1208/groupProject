const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Topic } = require("../db/models");

router.get('/', asyncHandler(async (req, res) => {
    const topics = await Topic.findAll()
    res.render('topics-list', { topics })
}))

module.exports = router;
