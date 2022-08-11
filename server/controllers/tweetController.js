const asyncHandler = require("express-async-handler");
const Tweet = require("../models/Tweet");
const User = require("../models/User");

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
                msg: "successs",
                tweetId: tweetId
            })
        }
    })
})

const updateTweet = asyncHandler(async (req, res) =>{
    const {tweetId, newText} = req.body;

    Tweet.updateOne({_id: tweetId}, {text: newText}, (err) =>{
        if(err){
            res.status(400).send("Unable to update");
        }
        else{
            res.status(200).json({
                msg: "success",
                tweetId: tweetId
            });
        }
    });
});

const likeTweet = asyncHandler(async (req, res) => {
    const {tweetId} = req.body;

    const userId = req.user; 

    const tweet = await Tweet.findOne({_id: tweetId});

    //Check if user already liked
    const user = await User.findOne({_id: userId});
    
    if(user.likes.includes(tweetId)){
        return res.status(222).send("Already liked");
    }

    // This line
    await Tweet.updateOne({_id: tweetId}, {$push: {likes: userId}});

    await User.updateOne({_id: userId},{$push: {likes: tweetId}})

    // This line
    return res.status(200).json({ 
        msg: "Success",
        tweetId: tweetId,
        currentLikes: tweet.likes.length+1
    })
    
});

const unlikeTweet = asyncHandler(async (req, res) => {
    const {tweetId} = req.body;

    const tweet = await Tweet.findOne({_id: tweetId});
    const userId = req.user;

    const user = await User.findOne({_id: userId});

    // If present user has the tweet not liked
    // Then it has already been unliked
    if(user.likes.indexOf(tweetId) == -1){
        return res.status(222).send("Already unliked");
    }

    // This one
    // From the tweet object remove the userId that liked it
    await Tweet.updateOne({_id: tweetId},{$pull:{likes: userId}});
    await User.updateOne({_id: userId}, {$pull: {likes: tweetId}})
    // This one
    return res.status(200).json({
        msg: "Success",
        tweetId: tweetId,
        currentLikes: tweet.likes.length-1
    })
})

const getTweet = asyncHandler(async (req, res) => {
    const {tweetId} = req.body;

    // Tweet object
    const tweet = await Tweet.findOne({_id: tweetId});
    if(!tweet){
        return res.status(400).json({msg: 'Tweet does not exist'})
    }

    return res.status(400).json({tweet})
})

module.exports = {
    postTweet,
    deleteTweet,
    updateTweet,
    likeTweet,
    unlikeTweet,
    getTweet
}