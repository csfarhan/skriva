const express = require('express');
const router = express.Router();
const { check} = require('express-validator');
const {loginUser} = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/", [auth,[check('email', 'Please include a valid email').isEmail(),
check('password','Please enter a password with 6 or more characters').not().isEmpty()]], loginUser);

module.exports = (router);