const asyncHandler = require("express-async-handler");


const addTweet = asyncHandler(async (req, res)=>{
    const {text, date} = req.body;
    if(!(text && date)){
        return res.status(400).send("Missing text or date");
    }

    console.log(req.user);

    const tweet = Tweet.Create()
});