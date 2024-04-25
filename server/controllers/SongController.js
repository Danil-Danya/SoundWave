import Songs from '../database/sql/models/songs';

class Song {
    async createSong (req, res) {
        const song = req.body.data.song;

        if (!song) res.status(404).json({ message: 'You send empty data' });
    } 
}

export default new Song();