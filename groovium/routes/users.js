const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Topic, Story } = require('../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const user = await User.findByPk(userId);
    // console.log(user)

    res.render('home')
}));

router.get('/', asyncHandler(async (req, res) => {
    res.render('user-profile-page')
}));



module.exports = router;
