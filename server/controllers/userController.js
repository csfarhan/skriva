const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require("../models/User")

const registerUser = asyncHandler(async (req, res)=>{
    const {firstName, lastName, email, password, dateOfBirth} = req.body;

    if(!(firstName && lastName && email && password)){
        res.status(400).send("Invalid Input");
        return;
    }

    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400).send("User already exists");
        return;
    }

    // hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user 
    const user = await User.create({
        firstName,
        lastName,
        email, 
        passwordHash: hashedPassword,
        dateOfBirth
    });

    if (user){
        res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id)
    });
    } else {
        res.status(400)
        throw new Error("error creating user")
    }
    // res.status(200).json({
    //     message: 'Registering user'
    // });
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser
}