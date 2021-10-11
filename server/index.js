import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoutes from './routes/books.js'

const app = express();

app.use('/books', bookRoutes)

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ynnad:M0ng0DB@cluster0.i4yfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
