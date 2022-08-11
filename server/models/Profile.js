const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    nickname: {
        // Make default nickname username
        type: String
    },
    bio: {
        type: String
    },
    userId:{
        type: String
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);