const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const Profile = require('../models/Profile');
const Tweet = require('../models/Tweet');
const { check, validationResult} = require('express-validator');

const updateProfile = asyncHandler(async (req, res) => {
    const {firstname, lastname, nickname, username, email, password, bio} = req.body;
    const userId = req.user;
    if(firstname){
        await User.updateOne({_id: userId}, {firstName: firstname});
    }
    if(lastname){
        await User.updateOne({_id: userId}, {lastName: lastname});
    }
    if(nickname){
        await User.updateOne({_id: userId}, {nickname: nickname});
    }
    if(email){
        await User.updateOne({_id: userId}, {email: email});
    }
    if(bio){
        await User.updateOne({_id: userId}, {bio: bio});
    }
    if(password){
        await User.updateOne({_id: userId}, {password: password});
    }
    if(username){
        await User.updateOne({_id: userId}, {username: username});
    }
    return res.status(200).json({msg: 'Profile has been updated'});
})

module.exports = {updateProfile}