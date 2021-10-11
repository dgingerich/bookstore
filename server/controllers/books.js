import Book from '../models/bookMessage.js';

export const getBooks = async (req, res) => {
    try {
        console.log('hello world')
        const books = await Book.find();
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBook = async (req, res) => {
    const book = req.body;

    const newBook = new BookMessage(book)

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch {
        res.status(409).json({ message: error.message })
    }
}