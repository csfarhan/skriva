const express = require('express');
const router = express.Router();
const {postTweet, deleteTweet, updateTweet, likeTweet, unlikeTweet} = require("../controllers/tweetController")
const auth = require("../middleware/auth");

router.post("/postTweet", auth, postTweet);

router.delete("/deleteTweet", auth, deleteTweet);

router.put("/updateTweet", auth, updateTweet);

router.put("/addLike", likeTweet);

router.put("/addDislike", unlikeTweet)


module.exports = (router);