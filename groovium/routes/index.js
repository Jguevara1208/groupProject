var express = require('express');
const { User, Story, Topic } = require('../db/models');
const bcrypt = require('bcryptjs');
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true });
const { asyncHandler } = require('../utils');
const { loginValidators, signupValidators, validationResult } = require('./validations')
const { loginUser } = require('../auth')

var router = express.Router();


router.get('/', asyncHandler( async (req, res) => {
  const stories = await Story.findAll({
    include: [User, Topic],
    limit: 6
  })
  stories.forEach(story => {
    let date = story.createdAt
    console.log(date)
    // let dateSplit = date.split('T').split('-')
    // let actualDate = `${dateSplit[1]}-${dateSplit[2]}`
    // story.createdAt = actualDate
  })
  console.log(stories[0].createdAt)
  res.render('splash-page', { stories });

}));

router.get('/sign-up', csrfProtection, asyncHandler(async (req, res) => {
  // const user = User.build(); //double check with team
  res.render('sign-up', { csrfToken: req.csrfToken()});
}));

router.post('/sign-up', csrfProtection, signupValidators, asyncHandler(async(req, res) => {
  const { firstName, lastName, email, password, avatarUrl, shortBio } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.build({
    firstName,
    lastName,
    email,
    hashedPassword,
    avatarUrl,
    shortBio
   });

  const validatorErrors = validationResult(req);

  console.log(validatorErrors);
  if (validatorErrors.isEmpty()) {
    await user.save();
    console.log('i made it before the redirect')
    res.redirect('/users');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('sign-up', {
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));

//   res.redirect('/users');
// }));


router.get('/log-in', csrfProtection, asyncHandler(async(req, res) => {
  res.render('log-in', { csrfToken: req.csrfToken()});
}))

router.post('/log-in', loginValidators, csrfProtection, loginValidators, asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);
    // console.log(validatorErrors)
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

  router.post('/logout', (req, res) => { //double check url with team
    logoutUser(req, res);
    res.redirect('/'); //double check where we want redirect
  });

module.exports = router;
