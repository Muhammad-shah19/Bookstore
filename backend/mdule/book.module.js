import mongoose  from "mongoose";

const bookSchema = new mongoose.Schema({
    name:String,
    description:String, 
    title:String,
    category:String,
    price:Number,
    rating:Number,
    reviews:Number,
    author:String,
})

const Book = mongoose.model("Book", bookSchema);
export default Book;