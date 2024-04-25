import Genre from "../database/sql/models/genre.js";
import filter from '../middlewares/genresMiddleware/filter.js';

class Genres {
    async createGenre (req, res) {
        try {
            const { name } = req.body;
            if (!name) return res.status(404).json({ message: 'You send empty data' });
    
            const isExistingGenre = await Genre.findOne({ where: {name} });
            if (isExistingGenre) return res.status(501).json({ message: 'This genre already exists' });
    
            const newGenre = await Genre.create({ name });
            return res.status(201).json({ message: 'Genre has been added' });
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }

    async getAllGenre (req, res) {
        try {
            // const { name } = req.body;
            // if (!name) return res.status(404).json({ message: 'You send empty data' });

            const allGenres = await Genre.findAll();
            return res.status(201).json({ allGenres });
        }
        catch (error) {
            console.log(error);
            return res.status(501).json({ messge: 'Server has been down' });
        }
    }
}

export default new Genres();