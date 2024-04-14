import { Sequelize, DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';

import modelSync from '../../../middlewares/databaseMiddleware/modelSync';

const sequelize = new Sequelize('sqlite::memory:');

export default class User extends Model {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id;

    @Attribute(DataTypes.STRING)
    @NotNull
    email;

    @Attribute(DataTypes.STRING)
    username;

    @Attribute(DataTypes.STRING)
    password;
}

modelSync(User);