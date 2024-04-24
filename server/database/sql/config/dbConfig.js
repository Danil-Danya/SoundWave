import { Sequelize } from 'sequelize';
import config from './config.json' assert { type: 'json' };

const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password,{
        host: config.development.host,
        dialect: config.development.dialect
    }
);

export default sequelize;