import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Connected to Mongo DB');
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(4000,()=>{
    console.log("Server listening on port 4000 !!!" );

})
