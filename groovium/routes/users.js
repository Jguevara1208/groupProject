const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")

router.get('/', asyncHandler(async (req, res) => {
    res.render('home')
}));

router.get('/profile-page', asyncHandler(async (req, res) => {
    res.render('user-profile-page')
}));

module.exports = router;
