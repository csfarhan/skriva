const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {registerUser, loginUser} = require("../controllers/userController")
const {postTweet, deleteTweet, updateTweet, likeTweet, unlikeTweet} = require("../controllers/tweetController")
const auth = require("../middleware/auth");

router.post("/postTweet", auth, postTweet);

router.delete("/deleteTweet", auth, deleteTweet);

router.put("/updateTweet", auth, updateTweet);

router.put("/likeTweet", auth, likeTweet);

router.put("/unlikeTweet", auth, unlikeTweet);


module.exports = (router);