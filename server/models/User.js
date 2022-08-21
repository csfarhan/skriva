const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        
    },
    dateOfbirth: {
        type: String,
        //required: true
    },
    followers: {
        type: []
    },
    following: {
        type: []
    },
    likes: {
        type: []
    },
})

module.exports = User = mongoose.model('user', UserSchema);