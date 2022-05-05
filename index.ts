import bodyParser from 'body-parser';
import express from 'express';
import  userRoute  from './Routers/userRout';


const app = express();
app.use(bodyParser.json());
app.use('/user', userRoute,()=>{
    console.log("user api connected")
});


app.listen(3000, () => {console.log('Server is running on port 3000')});    // eslint-disable-line no-console