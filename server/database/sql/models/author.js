import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Author =  sequelize.define('Author', {
    authorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },

    pseudonym: {
        type: DataTypes.STRING,
        allowNull: false
    },

    biography: {
        type: DataTypes.STRING,
        allowNull: true
    },

    albom: {
        type: DataTypes.STRING,
        allowNull: true
    },

    avatarSrc: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

Author.sync();

export default Author;