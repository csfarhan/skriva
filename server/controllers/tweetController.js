const asyncHandler = require("express-async-handler");
const Tweet = require("../models/Tweet");

const postTweet = asyncHandler(async (req, res)=>{
    const {text, date} = req.body;
    if(!(text && date)){
        return res.status(400).send("Missing text or date");
    }
    const userId = req.user;
    const tweet = new Tweet({
        text,
        date,
        userId
    });
    if(tweet){
        await tweet.save();
        return res.status(200).json({
            _id: tweet.id,
            text: tweet.text,
            date: tweet.date,
            userId: tweet.userId
        });
    }
    else{
        return res.status(400).send("Unable to create tweet");
    }
    
});

const deleteTweet = asyncHandler(async (req, res)=>{
    const {tweetId} = req.body;
    
    //We can call the delete right away with just tweetId safely
    //because we have already ran authentication middleware
    Tweet.deleteOne({_id: tweetId}, (err) =>{
        if(err){
            res.status(400).send("Unable to delete tweet");
        }else{
            res.status(200).json({
                msg: "sucesss",
                tweetId: "tweetId"
            })
        }
    })
})

const updateTweet = asyncHandler(async (req, res) =>{
    const {tweetId} = req.body;
});

module.exports = {
    postTweet,
    deleteTweet
}