import bodyParser from 'body-parser';
import express from 'express';
import  userRoute  from './Routers/userRout';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
mongoose.connect('mongodb://localhost:27017/user');
app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute,()=>{
    console.log("user api connected")
});


app.listen(5000, () => {console.log('Server is running on port 5000')});    // eslint-disable-line no-console