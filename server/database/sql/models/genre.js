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
    }
})