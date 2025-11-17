const express = require('express');
const connect = require('./config/database');
const app = express();
const Tweet = require('./models/tweet')
const TweetRepository = require('./Repository/tweet-repository');
const Comment =  require('./models/comment');

app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
  
}); 
