const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {registerUser} = require("../controllers/userController")

router.post("/",[check('firstName',
'Firstname is required').not().isEmpty(),
check('lastName',
'Lastname is required').not().isEmpty(),
check('email', 'Please include a valid email').isEmail(),
check('password','Please enter a password with 6 or more characters').isLength({ min: 6})], registerUser);

module.exports = (router);