import express from 'express';
import { getBooks, createBook } from '../controllers/books.js';
import { getGenres } from '../controllers/genres.js';

const router = express.Router();

router.get('/', getBooks)
router.post('/', createBook)

router.get('/genres', getGenres)

export default router;