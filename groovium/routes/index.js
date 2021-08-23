var express = require('express');
const { User } = require('../db/models');
const bcrypt = require('bcryptjs');
const { asyncHandler } = require('../utils');

var router = express.Router();


/* GET home page. */
router.get('/', asyncHandler( async (req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
}));

router.get('/sign-up', asyncHandler(async (req, res) => {
  //TODO:
  const user = res.locals.user

  res.render('sign-up', { user });
}));

router.post('/sign-up', asyncHandler(async(req, res) => {
  const { firstName, lastName, email, password, avatarUrl, shortBio } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    hashedPassword,
    avatarUrl,
    shortBio
   });

  res.redirect('/users');
}));

module.exports = router;
