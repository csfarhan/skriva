const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {registerUser, loginUser} = require("../controllers/userController")
const auth = require("../middleware/auth");

router.post("/tweet", auth, addTweet);

module.exports = (router);