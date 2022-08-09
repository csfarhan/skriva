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
    email:{
        type: String,
        required: true
    },
    passwordHash:{

    },
    dateOfbirth: {
        type: String,
        //required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema);