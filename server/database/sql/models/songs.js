import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Song = sequelize.define('Song', {
    songId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    albom: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    imageSrc: {
        type: DataTypes.STRING,
        allowNull: true
    },

    text: {
        type: DataTypes.STRING,
        allowNull: true
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    songSrc: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numberOfPlays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

Song.sync();

export default Song;