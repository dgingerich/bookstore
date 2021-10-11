import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: {firstName: String, lastName: String},
    summary: String,
    releaseDate: String,
    pages: String,
    genres: [String],
    productID: Number,
    cover: String
});

const Book = mongoose.model('Book', bookSchema);

export default Book;