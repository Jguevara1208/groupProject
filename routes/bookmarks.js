var express = require('express');
const { User, Story, Topic, Comment } = require('../db/models');
const { asyncHandler } = require('../utils');
const { loginUser, logoutUser } = require('../auth')

var router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
     
}))

router.delete('/', asyncHandler(async (req, res) => {

})) 

module.exports = router;