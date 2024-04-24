import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // preferences: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
})

User.sync();

export default User;