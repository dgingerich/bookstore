import axios from 'axios';

const url = 'http://209.151.154.118:4445/books';

export const fetchBooks = () => axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);

export const getGenres = () => axios.get(`${url}/genres`);
