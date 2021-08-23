var express = require('express');
const { User } = require('../db/models');
const bcrypt = require('bcryptjs');
const { asyncHandler } = require('../utils');
const { loginValidators, validationResult } = require('./validations')
const { loginUser } = require('../auth')

var router = express.Router();


router.get('/', asyncHandler( async (req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
}));

router.get('/sign-up', asyncHandler(async (req, res) => {
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


router.get('/log-in', asyncHandler(async(req, res) => {
  res.render('log-in');
}))

router.post('/log-in', loginValidators, asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          return res.redirect('/users');
        }
      }

      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('log-in', { email, errors });

  }));
module.exports = router;
