import Genre from '../models/genre.js'

export const getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.status(200).json(genres);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
