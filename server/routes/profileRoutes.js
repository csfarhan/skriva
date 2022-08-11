const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { updateProfile , getProfile } = require('../controllers/profileController');
const { check, validationResult } = require('express-validator');

router.put('/update', auth, updateProfile);

//router.get('/id', auth, getProfile);

module.exports = (router)