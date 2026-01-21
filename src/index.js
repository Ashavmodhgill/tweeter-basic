import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';

import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js';
passportAuth(passport);

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use('/api',apiRoutes);


app.listen(3000, async()=> {
    console.log('Server started');
    await connect();
    console.log('mongo Db connected');
    
}); 
