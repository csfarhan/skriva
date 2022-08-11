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
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    if(firstname){
        await User.updateOne({_id: userId}, {firstName: firstname});
    }
    if(lastname){
        await User.updateOne({_id: userId}, {lastName: lastname});
    }
    if(nickname){
        await User.updateOne({_id: userId}, {nickname: nickname});
    }
    if(validateEmail(email)){
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