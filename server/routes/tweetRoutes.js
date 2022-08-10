const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {registerUser, loginUser} = require("../controllers/userController")
const {postTweet, deleteTweet} = require("../controllers/tweetController")
const auth = require("../middleware/auth");

router.post("/postTweet", auth, postTweet);

router.delete("/deleteTweet", auth, deleteTweet);

router.put("/updateTweet", auth, updateTweet);

module.exports = (router);