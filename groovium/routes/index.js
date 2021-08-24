var express = require('express');
const { User, Story, Topic } = require('../db/models');
const bcrypt = require('bcryptjs');
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true });
const { asyncHandler } = require('../utils');
const { loginValidators, validationResult } = require('./validations')
const { loginUser } = require('../auth')

var router = express.Router();


router.get('/', asyncHandler( async (req, res) => {
  const stories = await Story.findAll({
    include: [User, Topic],
    limit: 6
  })
  console.log(stories[0].User)
  res.render('splash-page', { stories });
}));

router.get('/sign-up', csrfProtection, asyncHandler(async (req, res) => {

  res.render('sign-up', {csrfToken: req.csrfToken()});
}));

router.post('/sign-up', csrfProtection, asyncHandler(async(req, res) => {
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


router.get('/log-in', csrfProtection, asyncHandler(async(req, res) => {
  res.render('log-in', { csrfToken: req.csrfToken()});
}))

router.post('/log-in', loginValidators, csrfProtection, asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    let errors = [];
    const validatorErrors = validationResult(req);
    console.log(validatorErrors)
    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
        if (passwordMatch) {
          loginUser(req, res, user)
          return res.redirect('/users');
        }
      }

      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('log-in', { email, errors, csrfToken: req.csrfToken() });

  }));
module.exports = router;
