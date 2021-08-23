var express = require('express');
const { User } = require('../db/models');
var router = express.Router();
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('../utils');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/sign-up', (req, res) => {
  //TODO:

  res.render('sign-up');
});

router.post('/sign-up', asyncHandler(async(req, res) => {
  const { firstName, lastName, email, password, avatarUrl, shortBio } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    firstName, lastName, email, hashedPassword, avatarUrl, shortBio
   });
  res.redirect('/users');
}));

module.exports = router;
