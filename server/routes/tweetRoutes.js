const express = require('express');
const router = express.Router();
const {postTweet, deleteTweet, updateTweet, addLike, addDislike} = require("../controllers/tweetController")
const auth = require("../middleware/auth");

router.post("/postTweet", auth, postTweet);

router.delete("/deleteTweet", auth, deleteTweet);

router.put("/updateTweet", auth, updateTweet);

router.put("/addLike", addLike);

router.put("/addDislike", addDislike)


module.exports = (router);