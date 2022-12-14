const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
   text:{
        type: String,
        required: true
   },
   date:{
        type: String,
        required: true
   },
   userId:{
        type: String,
        required: true
   },
   likes:{
     type: []
   }
})

module.exports = Tweet = mongoose.model('tweet', TweetSchema);