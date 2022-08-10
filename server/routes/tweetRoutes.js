const express = require('express');
const router = express.Router();
const {postTweet, deleteTweet, updateTweet} = require("../controllers/tweetController")
const auth = require("../middleware/auth");

router.post("/postTweet", auth, postTweet);

router.delete("/deleteTweet", auth, deleteTweet);

router.put("/updateTweet", auth, updateTweet);

module.exports = (router);