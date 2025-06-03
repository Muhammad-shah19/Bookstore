import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from "./router/book.router.js"
import cors from 'cors';
import userRouter from './router/user.router.js';
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());
const URI = process.env.URI;

try {
    mongoose.connect(URI)
    console.log("connected mongoDb");
    
} catch (error) {
    console.log("errot in connecting to mongoDb", error);
}

app.use('/book',bookRouter);
app.use("/user",userRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})