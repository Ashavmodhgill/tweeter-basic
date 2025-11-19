import express from 'express';
import {connect} from './config/database.js';
const app = express();
import Service from './Services/Tweet-service.js';
app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
   let ser = new Service();
   await ser.create({content:'done with #debugging !!'})
}); 
