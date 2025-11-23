import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);
import Service from './Services/Tweet-service.js';
app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
   let ser = new Service();
   await ser.create({content:'capital #CoDE  #works or #NOT !!'})
}); 
