import mongoose from 'mongoose';

const genreSchema = mongoose.Schema({
    type: String,
    subgenres: [String]
});

const Genre = mongoose.model('Genre', genreSchema);

export default Genre;