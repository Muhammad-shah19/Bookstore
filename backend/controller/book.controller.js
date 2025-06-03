import Book from "../mdule/book.module.js";

export const getBooks = async (req, res)=>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("error occured while fetching books", error);
        res.status(500).json(error);
    }
}
