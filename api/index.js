import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'
dotenv.config()

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Connected to Mongo DB');
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(express.json())

app.listen(4000,()=>{
    console.log("Server listening on port 4000 !!!" );

})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
