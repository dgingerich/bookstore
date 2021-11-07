import axios from 'axios';

const url = 'https://www.dannygingerich.com/api/books';

export const fetchBooks = () => axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);

export const getGenres = () => axios.get(`${url}/genres`);
