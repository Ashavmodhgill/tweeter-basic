import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import {UserRepository,TweetRepository} from './Repository/index.js'
import likeService from './Services/like-service.js';

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

import Service from './Services/Tweet-service.js';
app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
     const UserRepo = new UserRepository();
     const tweetRepo= new TweetRepository();
     const tweet = await tweetRepo.getAll(0,10);
     const user = await UserRepo.getAll();
     const LikeService = new likeService();
    await LikeService.toggleLike(tweet[0].id,'Tweet',user[0].id)

}); 
