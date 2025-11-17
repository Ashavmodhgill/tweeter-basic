const express = require('express');
const connect = require('./config/database');
const app = express();
const Tweet = require('./models/tweet')
app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
   // This is a sample query for testing
   const tweets = await Tweet.find({
    content:  ["hi hopw are you", "srist tweet", "12223"]
   });
   console.log(tweets);
}); 
