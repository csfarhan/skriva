const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const Profile = require('../models/Profile');
const { check, validationResult} = require('express-validator');


const checksArrRegister = [
    check("username", "username is required").not().isEmpty(),
    check('firstName','Firstname is required').not().isEmpty(),
    check('lastName','Lastname is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6})]

const checksArrLogin = [
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').exists()]


const registerUser = asyncHandler(async (req, res)=>{
    const errors = validationResult(req);
    const {firstName, lastName, username, email, password, dateOfBirth, nickname, bio, userId} = req.body;

    // If something is missing send error
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
    // Check if user or username already exists
    const userExists = await User.findOne({email});
    const usernameExists = await User.findOne({username});
    if (userExists) {
        return res.status(400).send("User already exists");
    }
    if (usernameExists) {
        return res.status(400).send('Username already exists');
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User object
    const user = new User({
        firstName,
        lastName,
        username,
        email, 
        password: hashedPassword,
        dateOfBirth
    });

    // Create Profile object
    const profile = new Profile({
        nickname,
        bio,
        userId: user._id
    });
    // If both objects created, return information
    if(user && profile){
        await user.save();
        await profile.save();
        return res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            nickname,
            bio,
            userId,
            token: generateToken(user._id)
        });
    }
    } catch (error) {
        return console.error(error.message);
    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const loginUser = asyncHandler(async (req, res)=>{
    const errors = validationResult(req);
    const {email, password} = req.body;

    // If something is missing send error
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    try {
    // Find a user by email if exists
    // Ask about this one
    const userExists = await User.findOne({email: email});
    if (!userExists) {
        return res.status(400).json({errors: [{ msg: 'Invalid Credentials'}]});
    }
    
    // Compare password in database to password input
    if (await bcrypt.compare(password,userExists.password)){
        return res.status(200).json({
            _id: userExists._id,
            firstName: userExists.firstName,
            lastName: userExists.lastName,
            email: userExists.email,
            token: generateToken(userExists._id)
        });
    } else{
        return res.status(400).json({msg: 'Invalid Credentials'})
    }
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

const followUser = asyncHandler(async (req, res)=>{
    const {toFollow} = req.body;
    // Init user who called a request
    const userId = req.user;
    const toFollowUser = await User.findOne({_id: toFollow});

    // Check if already followed
    if(toFollowUser.followers.indexOf(userId) > -1){
        return res.status(400).json({ msg: 'Already following'});
    }

    // Find user by id then push into followers/following array
    await User.updateOne({_id: toFollowUser}, {$push:{followers: userId}});
    await User.updateOne({_id: userId}, {$push:{following: toFollow}});
    return res.status(200).json({msg: 'Followed User'});

});

const unfollowUser = asyncHandler(async (req, res)=>{
    const {toUnfollow} = req.body;
    // Init user who called a request
    const userId = req.user;
    const toUnfollowUser = await User.findOne({_id: toUnfollow});
    const currentUser = await User.findOne({_id: userId});

    // Check if 'I' don't follow toUnfollow
    if(currentUser.followers.indexOf(toUnfollow) == -1){
        return res.status(400).json({ msg: 'Already unfollowed'});
    }

    // Find user by id then remove 'I' follow from toUnfollow's followers
    // and remove toUnfollow from 'I' following
    await User.updateOne({_id: toUnfollow}, {$pull:{followers: userId}});
    await User.updateOne({_id: userId}, {$pull:{following: toUnfollow}});
    return res.status(200).json({msg: 'Unfollowed User'});

});

const getProfile = asyncHandler(async (req, res)=>{
    const {userId} = req.body;
    const profile = await Profile.findOne({userId: userId});
    return res.status(200).json(profile);

});

const updateProfile = asyncHandler(async (req, res) => {
    const {firstname, lastname, nickname, username, bio} = req.body;
    const userId = req.user;
    await User.updateOne(
        {_id: userId}, 
        {firstName: firstname, 
        lastName: lastname, 
        nickname: nickname, 
        bio: bio, 
        username: username});
    return res.status(200).json({msg: 'Profile has been updated'});
})

const changePassword = asyncHandler(async (req, res) => {
    const {currentPassword, newPassword} = req.body;
    const userId=  req.user;

    const user = await User.findOne({_id: userId});

    //check current password matches whats in the database
    if(await bcrypt.compare(currentPassword, user.password)){
        const salt = await bcrypt.genSalt(10);
        //Generate password hash for new password
        const newPasswordHash = await bcrypt.hash(newPassword, salt);
        user.password = newPasswordHash;
        await user.save();
        return res.status(200).send("Successfuly changed password");
    }else{
        return res.status(400).send("Incorrect password");
    }
})

module.exports = {
    registerUser,
    loginUser,
    followUser,
    getProfile,
    updateProfile,
    checksArrRegister,
    checksArrLogin,
    changePassword,
    unfollowUser
}