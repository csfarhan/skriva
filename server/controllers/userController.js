const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const { check, validationResult} = require('express-validator');

const registerUser = asyncHandler(async (req, res)=>{
    const errors = validationResult(req);
    // Ask porom if you add/remove  item in object will it break
    const {firstName, lastName, email, password, dateOfBirth} = req.body;

    // If something is missing send error
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
        // Find a user by email if exists then send error
    const userExists = await User.findOne({email});
    if (userExists) {
        return res.status(400).send("User already exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user 
    const user = new User({
        firstName,
        lastName,
        email, 
        passwordHash: hashedPassword,
        dateOfBirth
    });

    // If created show information
    if (user){
        await user.save();
        return res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id)
        });
    }
    } catch (error) {
        return res.status(400).send("Could not register user.");
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
    if (await bcrypt.compare(password,userExists.passwordHash)){
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
    const userCurr = await User.findOne({_id: userId});
    const toFollowUser = await User.findOne({_id: toFollow});

    // Check if already followed
    if(toFollowUser.followers.indexOf(userId) > -1){
        return res.status(400).json({ msg: 'Already following'});
    }
    // Add req.user to toFollow's followers array
    toFollowUser.followers.push(userId);
    // Add toFollow's userId to req.user's following array
    userCurr.following.push(toFollow);
    await User.updateOne({_id: userId}, {following: userCurr.following});
    await User.updateOne({_id: toFollow}, {followers: toFollowUser.followers});
    return res.status(200).json({msg: 'Followed User'});

});

module.exports = {
    registerUser,
    loginUser,
    followUser
}