const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {registerUser, loginUser, followUser, getProfile, updateProfile, checksArrRegister, checksArrLogin} = require("../controllers/userController")
const auth = require("../middleware/auth");

router.post("/", checksArrRegister, registerUser);

router.post("/login" , checksArrLogin , loginUser);

router.put('/follow', auth , followUser);

router.get('/getProfile', auth, getProfile);

router.put('/update', auth, updateProfile);
module.exports = (router);