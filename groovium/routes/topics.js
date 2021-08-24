const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")

router.get('/', asyncHandler(async (req, res) => {
    res.render('topics-list')
}))

module.exports = router;
