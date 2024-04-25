import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Genre = sequelize.define('Genre', {
    genreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    numberOfPlays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    numberOfSong: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

Genre.sync();

export default Genre;