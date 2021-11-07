import axios from 'axios';

const url = 'http://127.0.0.1:4444/books';

export const fetchBooks = () => axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);

export const getGenres = () => axios.get(`${url}/genres`);
